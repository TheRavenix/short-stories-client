"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import styles from "./DeleteStory.module.css";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P, Span } from "@/components/ui/Typography";
import { ActionSlot } from "@/components/ActionSlot";
import { useToastStore } from "@/stores/toast";
import { deleteStory } from "@/services/story";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  storyId: number
  storyName: string
}

export function DeleteStoryContent({
  setOpen,
  storyId,
  storyName
}: Props) {
  const [confirmMessage, setConfirmMessage] = useState("")
  const addToast = useToastStore((s) => s.addToast)
  const confirmed = confirmMessage.toLowerCase() === storyName.toLowerCase()

  const mutation = useMutation({
    mutationFn: deleteStory,
    onSuccess(data) {
      addToast({
        title: 'Done',
        description: data.message,
      })
      window.location.replace('/s')
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error delete story',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
    }
  })

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (confirmed) {
      mutation.mutate(storyId)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleDelete}>
      <P size='lg'>
        Type{' '}
        <Span size='lg' weight='bold'>
          {storyName}
        </Span>
      </P>
      <Input
        label='Type here'
        required
        value={confirmMessage}
        onChange={(e) => setConfirmMessage(e.target.value)}
      />
      <ActionSlot>
        <Button
          type='submit'
          variant='destructive'
          disabled={!confirmed || mutation.isPending}
        >
          Delete
        </Button>
      </ActionSlot>
    </form>
  )
}

"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

import styles from "./DeleteStoryReview.module.css";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P } from "@/components/ui/Typography";
import { ActionSlot } from "@/components/ActionSlot";
import { useToastStore } from "@/stores/toast";
import { deleteStoryReview } from "@/services/story-review";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  reviewId: number
}

const CONFIRM = 'CONFIRM'

export function DeleteStoryReviewContent({ setOpen, reviewId }: Props) {
  const [confirmMessage, setConfirmMessage] = useState("")
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const addToast = useToastStore((s) => s.addToast)
  const confirmed = confirmMessage.toLowerCase() === CONFIRM.toLowerCase()

  const mutation = useMutation({
    mutationKey: ['delete-story-review'],
    mutationFn: deleteStoryReview,
    onSuccess(data) {
      let href = pathName

      if (searchParams.get('view') === 'tabs') {
        href += `?view=tabs&tab=${searchParams.get('tab')}`
      }

      addToast({
        title: 'Done',
        description: data.message,
      })
      router.push(href, { scroll: false })
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error delete story review',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
    }
  })

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (confirmed) {
      mutation.mutate(reviewId)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleDelete}>
      <P size='lg'>Type {CONFIRM}</P>
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

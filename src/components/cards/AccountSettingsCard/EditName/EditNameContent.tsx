"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ActionSlot } from "@/components/ActionSlot";
import { useProfile } from "@/hooks/profile";
import { useToastStore } from "@/stores/toast";
import { Form } from "@/components/Form";
import { editUserName } from "@/services/user";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function EditNameContent({ setOpen }: Props) {
  const [name, setName] = useState("")
  const { refetch } = useProfile()
  const addToast = useToastStore((s) => s.addToast)

  const mutation = useMutation({
    mutationFn: editUserName,
    onSuccess(data) {
      addToast({
        title: 'Edit name',
        description: data.message
      })
      setOpen(false)
      refetch()
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error edit name',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
    }
  })

  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    mutation.mutate(name)
  }

  return (
    <Form onSubmit={handleEdit}>
      <Input
        label='Your New Name'
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ActionSlot>
        <Button type='submit' disabled={mutation.isPending}>
          Save
        </Button>
      </ActionSlot>
    </Form>
  )
}

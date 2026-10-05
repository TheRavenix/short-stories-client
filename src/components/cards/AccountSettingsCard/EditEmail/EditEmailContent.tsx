"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ActionSlot } from "@/components/ActionSlot";
import { Form } from "@/components/Form";
import { useProfile } from "@/hooks/profile";
import { useToastStore } from "@/stores/toast";
import { EditEmailData, editUserEmail } from "@/services/user";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditEmailContent({ setOpen }: Props) {
  const [formData, setFormData] = useState<EditEmailData>({
    currentEmail: '',
    newEmail: ''
  })
  const { refetch } = useProfile()
  const addToast = useToastStore((s) => s.addToast)

  const mutation = useMutation({
    mutationFn: editUserEmail,
    onSuccess(data) {
      addToast({
        title: 'Edit email',
        description: data.message
      })
      setOpen(false)
      refetch()
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error edit email',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
    }
  })

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    mutation.mutate(formData)
  }

  return (
    <Form spacing='md' onSubmit={handleEdit}>
      <Input
        type='email'
        label='Current Email'
        required
        value={formData.currentEmail}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, currentEmail: e.target.value }))
        }
      />
      <Input
        type='email'
        label='New Email'
        required
        value={formData.newEmail}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, newEmail: e.target.value }))
        }
      />
      <ActionSlot>
        <Button type='submit' disabled={mutation.isPending}>
          Save
        </Button>
      </ActionSlot>
    </Form>
  )
}

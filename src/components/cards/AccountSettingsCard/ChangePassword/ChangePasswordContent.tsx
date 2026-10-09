'use client'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ActionSlot } from '@/components/ActionSlot'
import { Form } from '@/components/Form'
import { useToastStore } from '@/stores/toast'
import { ChangePasswordData, changeUserPassword } from '@/services/user'

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function ChangePasswordContent({ setOpen }: Props) {
  const [formData, setFormData] = useState<ChangePasswordData>({
    currentPassword: '',
    newPassword: ''
  })
  const addToast = useToastStore((s) => s.addToast)

  const mutation = useMutation({
    mutationFn: changeUserPassword,
    onSuccess(data) {
      addToast({
        title: 'Change password',
        description: data.message
      })
      setFormData({ currentPassword: '', newPassword: '' })
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error change password',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
    }
  })

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    mutation.mutate(formData)
  }

  return (
    <Form spacing='md' onSubmit={handleChange}>
      <Input
        type='password'
        label='Current Password'
        required
        value={formData.currentPassword}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            currentPassword: e.target.value
          }))
        }
      />
      <Input
        type='password'
        label='New Password'
        required
        value={formData.newPassword}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, newPassword: e.target.value }))
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

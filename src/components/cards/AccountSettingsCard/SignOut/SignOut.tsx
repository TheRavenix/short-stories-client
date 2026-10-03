"use client";

import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/Button";
import { useToastStore } from "@/stores/toast";
import { signOut } from "@/services/auth";

export function SignOut() {
  const addToast = useToastStore((s) => s.addToast)

  const mutation = useMutation({
    mutationFn: signOut,
    onSuccess(data) {
      addToast({
        title: 'Done',
        description: data.message
      })
      window.location.replace('/sign-in')
    },
    onError(error) {
      addToast({
        title: 'Error sign out',
        description: error.message,
        variant: 'error'
      })
    }
  })

  return (
    <Button
      size='sm'
      variant='destructive'
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
    >
      Sign out
    </Button>
  )
}

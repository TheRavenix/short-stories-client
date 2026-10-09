'use client'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { Button } from '@/components/ui/Button'
import { useAuthStore } from '@/stores/auth'
import { useToastStore } from '@/stores/toast'
import { downloadStory } from '@/services/story'
import { downloadFile } from '@/utils/download-file'

type Props = {
  storyId: number
  storyName: string
}

export function StoryDownloadButton({ storyId, storyName }: Props) {
  const router = useRouter()
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const addToast = useToastStore((s) => s.addToast)

  const mutation = useMutation({
    mutationKey: ['download-story'],
    mutationFn: downloadStory,
    onSuccess(data) {
      const url = window.URL.createObjectURL(new Blob([data]))
      downloadFile(url, `${storyName}.pdf`)
      window.URL.revokeObjectURL(url)
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error download story',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
    }
  })

  const handleDownload = () => {
    if (!isAuthenticated) {
      router.push('/sign-in')
      return
    }

    mutation.mutate(storyId)
  }

  return (
    <Button
      variant='inverse'
      onClick={handleDownload}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? 'Loading...' : 'Download'}
    </Button>
  )
}

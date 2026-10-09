'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { useProfile } from '@/hooks/profile'

type Props = {
  storySlug: string
}

export function StoryEditButton({ storySlug }: Props) {
  const { profile, isLoading } = useProfile()

  if (isLoading || profile?.role !== 'admin') {
    return null
  }

  return (
    <Link href={`/s/${storySlug}/edit`}>
      <Button>Edit</Button>
    </Link>
  )
}

'use client'

import { StoryBookLayout } from './StoryBookLayout'
import { StoryCardLayout } from './StoryCardLayout'
import { useProfile } from '@/hooks/profile'
import { useStoryStore } from '@/stores/story'
import { StoryType } from '../Story'

type Props = {
  id: number
  story: StoryType
}

export function StoryLayout({ id, story }: Props) {
  const { profile } = useProfile()
  const storyLayout = useStoryStore((s) => s.storyLayout)

  if (profile?.plan === 'free') {
    return <StoryCardLayout story={story} />
  }
  if (profile?.plan === 'pro' && storyLayout === 'book') {
    return (
      <StoryBookLayout
        id={id}
        story={story}
      />
    )
  }

  return <StoryCardLayout story={story} />
}

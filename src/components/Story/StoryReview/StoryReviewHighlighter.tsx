'use client'

import { useEffect } from 'react'

import { useProfile } from '@/hooks/profile'
import { useAuthStore } from '@/stores/auth'
import { FindReviewsByStoryIdResponse } from '@/lib/story/story-review'

type Props = {
  storyReviews: FindReviewsByStoryIdResponse
}

export function StoryReviewHighlighter({ storyReviews }: Props) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const { profile } = useProfile()

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    const reviewUserNameList = document.querySelectorAll(
      '[data-review-user-id]'
    )
    reviewUserNameList.forEach((userNameElm) => {
      if (userNameElm.getAttribute('data-review-user-id') === profile?.id.toString()) {
        userNameElm.setAttribute('data-highlighted', 'true')
      }
    })
  }, [isAuthenticated, profile, storyReviews])

  return null
}

"use client";

import { useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";

import { readStory } from "@/services/story";
import { STORY_READ_TIMEOUT_MS } from "@/constants/story";

type Props = {
  storyId: number
}

export function StoryReadTracker({ storyId }: Props) {
  const storyReadTimeout = useRef<NodeJS.Timeout>(null!)

  const mutation = useMutation({
    mutationKey: ["read-story"],
    mutationFn: readStory,
  })

  useEffect(() => {
    storyReadTimeout.current = setTimeout(() => {
      mutation.mutate(storyId)
    }, STORY_READ_TIMEOUT_MS)

    return () => clearTimeout(storyReadTimeout.current)
  }, [])

  return null
}

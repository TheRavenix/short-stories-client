'use client'

import { H3 } from '@/components/ui/Typography'
import { useStoryReadStore } from '@/stores/story/story-read'
import { romanize } from '@/utils/romanize'

type Props = {
  index: number
}

export function StoryContentHeading({ index }: Props) {
  const lineNumeralsActive = useStoryReadStore((s) => s.lineNumeralsActive)
  const romanNumeralsActive = useStoryReadStore((s) => s.romanNumeralsActive)

  if (!lineNumeralsActive) {
    return null
  }

  return <H3>{romanNumeralsActive ? romanize(index + 1) : index + 1}</H3>
}

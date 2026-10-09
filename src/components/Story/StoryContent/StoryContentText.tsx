'use client'

import clsx from 'clsx'

import styles from './StoryContent.module.css'

import { P, ParagraphProps } from '@/components/ui/Typography'
import { useStoryReadStore } from '@/stores/story/story-read'

type Props = ParagraphProps

export function StoryContentText({ className, style, ...rest }: Props) {
  const fontSize = useStoryReadStore((s) => s.fontSize)

  return (
    <P
      className={clsx(styles.contentText, className)}
      style={{ ...style, fontSize }}
      {...rest}
    />
  )
}

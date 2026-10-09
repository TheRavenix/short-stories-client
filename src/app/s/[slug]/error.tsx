'use client'

import styles from './page.module.css'

import { Callout } from '@/components/Callout'
import { Container } from '@/components/ui/Container'

type Props = {
  error: Error
  reset?: () => void
}

export default function StoryPageError(props: Props) {
  return (
    <main className={styles.noStoryMain}>
      <Container withPaddingBlock>
        <Callout
          message={`This story hasn’t been written yet… or maybe it got lost!`}
          href='/s'
          buttonText='Back to Library'
        />
      </Container>
    </main>
  )
}

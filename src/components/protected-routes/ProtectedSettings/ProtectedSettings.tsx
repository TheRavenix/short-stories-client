'use client'

import { PropsWithChildren } from 'react'

import styles from './ProtectedSettings.module.css'

import { useAuthSession } from '@/hooks/auth'
import { CompactContainer } from '@/components/ui/Container/CompactContainer'
import { Skeleton } from '@/components/Skeleton'
import { H1 } from '@/components/ui/Typography'

type Props = PropsWithChildren

export function ProtectedSettings({ children }: Props) {
  const { isLoading, isError } = useAuthSession({
    redirectTo: '/'
  })

  if (isLoading || isError) {
    return (
      <main className={styles.main}>
        <CompactContainer withPaddingBlock withContentSpacing>
          <div className={styles.skeletonHeadline}>
            <H1>Settings</H1>
          </div>
          <div className={styles.skeletonCards}>
            <Skeleton type='card' count={5} />
          </div>
        </CompactContainer>
      </main>
    )
  }

  return children
}

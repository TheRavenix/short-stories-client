import Link from 'next/link'
import { Suspense } from 'react'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

import styles from './page.module.css'

import { Button } from '@/components/ui/Button'
import { HeroCanvas } from '@/components/HeroCanvas'
import { H1, P } from '@/components/ui/Typography'
import { Container } from '@/components/ui/Container'
import { CompactContainer } from '@/components/ui/Container/CompactContainer'
import { SignUpSection } from '@/components/auth/SignUpSection'
import { FeaturedSectionError } from '@/components/featured/FeaturedSection/FeaturedSectionError'
import { FeaturedSectionLoading } from '@/components/featured/FeaturedSection/FeaturedSectionLoading'
import { FeaturedSection } from '@/components/featured/FeaturedSection'
import { NewsletterSubSection } from '@/components/newsletter/NewsletterSubSection'

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <main>
      <Container withPaddingBlock withContentSpacing>
        <div className={styles.hero}>
          <HeroCanvas />
          <div className={styles.heroContent}>
            <H1 transform='capitalize' variant='primary'>
              Discover amazing short stories
            </H1>
            <P>Read, imagine, and escape into worlds beyond your own.</P>
            <Link href='/s' className={styles.exploreLink}>
              <Button size='full'>Explore Stories</Button>
            </Link>
          </div>
        </div>
        <ErrorBoundary errorComponent={FeaturedSectionError}>
          <Suspense fallback={<FeaturedSectionLoading />}>
            <FeaturedSection />
          </Suspense>
        </ErrorBoundary>
      </Container>
      <CompactContainer withPaddingBlock withContentSpacing>
        <SignUpSection />
        <NewsletterSubSection />
      </CompactContainer>
    </main>
  )
}

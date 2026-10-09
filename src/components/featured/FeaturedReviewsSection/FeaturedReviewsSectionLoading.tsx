import styles from './FeaturedReviewsSection.module.css'

import { H1 } from '@/components/ui/Typography'
import { Skeleton } from '@/components/Skeleton'

export function FeaturedReviewsSectionLoading() {
  return (
    <div className={styles.reviews}>
      <H1 transform='capitalize' className={styles.headline}>
        Featured reviews
      </H1>
      <div className={styles.reviewsList}>
        <Skeleton type='card' count={6} />
      </div>
    </div>
  )
}

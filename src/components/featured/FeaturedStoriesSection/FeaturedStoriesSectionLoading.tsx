import styles from './FeaturedStoriesSection.module.css'

import { H1 } from '@/components/ui/Typography'
import { Skeleton } from '@/components/Skeleton'

export function FeaturedStoriesSectionLoading() {
  return (
    <div className={styles.stories}>
      <H1 transform='capitalize' className={styles.headline}>
        Featured stories
      </H1>
      <div className={styles.storiesList}>
        <Skeleton type='card' count={6} height='250px' />
      </div>
    </div>
  )
}

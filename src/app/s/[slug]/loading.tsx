import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/Skeleton";

export default function StoryPageLoading() {
  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <div className={styles.skeletonHeadline}>
          <Skeleton type='text' width='200px' height='35px' />
        </div>
        <div className={styles.storyContainer}>
          <Skeleton type='card' height='250px' />
          <div className={styles.viewToggleSkeleton}>
            <Skeleton type='button' width='200px' height='35px' />
          </div>
          <Skeleton type='card' count={3} />
        </div>
      </Container>
    </main>
  )
}

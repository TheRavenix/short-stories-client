import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { Skeleton } from "@/components/Skeleton";
import { StoryBackButton } from "@/components/Story/buttons/StoryBackButton";

export default function ReadStoryLoading() {
  return (
    <main className={styles.main}>
      <CompactContainer spacing='lg' withPaddingBlock>
        <StoryBackButton />
        <div className={styles.skeletonHeadline}>
          <Skeleton type='text' width='200px' height='35px' />
        </div>
        <Skeleton type='card' />
      </CompactContainer>
    </main>
  )
}

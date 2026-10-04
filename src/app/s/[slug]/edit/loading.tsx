import styles from "./page.module.css";

import { CompactContainer } from "@/components/ui/Container/CompactContainer";
import { Skeleton } from "@/components/Skeleton";
import { H1 } from "@/components/ui/Typography";
import { StoryBackButton } from "@/components/Story/buttons/StoryBackButton";

export default function EditStoryLoading() {
  return (
    <main className={styles.main}>
      <CompactContainer spacing="lg" withPaddingBlock>
        <StoryBackButton />
        <H1 className={styles.headline} transform="capitalize">
          Edit story
        </H1>
        <Skeleton type="card" />
      </CompactContainer>
    </main>
  );
}

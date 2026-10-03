import styles from "./page.module.scss";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container";
import { AdminPageGuard } from "@/components/guards";
import { CreateStoryForm } from "@/components/Story/forms/CreateStoryForm";

export default function CreateStory() {
  return (
    <>
      <AdminPageGuard redirectTo="/s" />
      <main className={styles.main}>
        <CompactContainer spacing="lg" withPaddingBlock>
          <H1 className={styles.headline} transform="capitalize">
            Create story
          </H1>
          <CreateStoryForm />
        </CompactContainer>
      </main>
    </>
  );
}

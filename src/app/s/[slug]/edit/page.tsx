import styles from "./page.module.scss";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container";
import { AdminPageGuard } from "@/components/guards";
import { EditStoryForm, StoryBackButton } from "@/components/Story";

import { getStoryBySlug, getStoryContentByStoryId } from "@/lib/data/story";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EditStory(props: Props) {
  const params = await props.params;
  const storyResponse = await getStoryBySlug(params.slug);
  const storyContentResponse = await getStoryContentByStoryId(
    storyResponse?.data._id
  );

  return (
    <>
      <AdminPageGuard redirectTo={`/s/${params.slug}`} />
      <main className={styles.main}>
        <CompactContainer spacing="lg" withPaddingBlock>
          <StoryBackButton storySlug={params.slug} />
          <H1 className={styles.headline} transform="capitalize">
            Edit story
          </H1>
          <EditStoryForm
            story={storyResponse?.data}
            storyContent={storyContentResponse?.data}
          />
        </CompactContainer>
      </main>
    </>
  );
}

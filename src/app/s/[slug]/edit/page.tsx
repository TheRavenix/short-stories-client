import styles from "./page.module.css";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container/CompactContainer";
import { AdminPageGuard } from "@/components/guards";
import { StoryBackButton } from "@/components/Story/buttons/StoryBackButton";
import { EditStoryForm } from "@/components/Story/forms/EditStoryForm";
import { getStoryBySlug } from "@/lib/story";

type Props = {
  params: Promise<{ slug: string }>
}

export default async function EditStory(props: Props) {
  const params = await props.params
  // Handle not found errors if they are not handeled already
  const story = await getStoryBySlug(params.slug)

  return (
    <>
      <AdminPageGuard redirectTo={`/s/${params.slug}`} />
      <main className={styles.main}>
        <CompactContainer spacing='lg' withPaddingBlock>
          <StoryBackButton storySlug={params.slug} />
          <H1 className={styles.headline} transform='capitalize'>
            Edit story
          </H1>
          <EditStoryForm story={story} />
        </CompactContainer>
      </main>
    </>
  )
}

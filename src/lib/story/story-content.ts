import { StoryContentType } from "@/components/Story/StoryContent"

export async function getStoryContentByStoryId(
  storyId: number
): Promise<StoryContentType> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-contents/${storyId}`
  )
  return response.json()
}

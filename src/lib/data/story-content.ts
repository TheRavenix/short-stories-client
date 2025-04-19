import { GetStoryContentByStoryIdResponse } from "@/services/story-content";

export async function getStoryContentByStoryId(
  storyId: string
): Promise<GetStoryContentByStoryIdResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-contents/${storyId}`
  );
  return response.json();
}

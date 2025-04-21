import { GetStoryReviewsByStoryIdResponse } from "@/services/story-review";

export async function getStoryReviewsByStoryId(
  storyId: string
): Promise<GetStoryReviewsByStoryIdResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-reviews/${storyId}`
  );
  return response.json();
}

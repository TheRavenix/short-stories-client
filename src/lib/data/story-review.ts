import { NETWORK_ERROR } from "@/constants/error";
import { GetStoryReviewsByStoryIdResponse } from "@/services/story-review";
import { ErrorResponse } from "@/types/response";
import { isNextJSFetchError } from "@/utils/error";

export async function getStoryReviewsByStoryId(
  storyId: string
): Promise<GetStoryReviewsByStoryIdResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-reviews/${storyId}`
    );
    const responseData: GetStoryReviewsByStoryIdResponse & ErrorResponse =
      await response.json();

    if (!response.ok || !responseData.success) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (error) {
    if (isNextJSFetchError(error)) {
      throw new Error(NETWORK_ERROR);
    }

    throw error;
  }
}

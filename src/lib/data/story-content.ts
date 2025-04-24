import { StoryContentType } from "@/components/Story";
import { NETWORK_ERROR } from "@/constants/error";
import { ErrorResponse } from "@/types/response";
import { isNextJSFetchError } from "@/utils/error";

interface GetStoryContentByStoryIdResponse {
  success: boolean;
  data: StoryContentType;
}

export async function getStoryContentByStoryId(
  storyId: string
): Promise<GetStoryContentByStoryIdResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-contents/${storyId}`
    );
    const responseData: GetStoryContentByStoryIdResponse & ErrorResponse =
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

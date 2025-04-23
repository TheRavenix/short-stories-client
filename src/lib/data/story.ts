import { NETWORK_ERROR } from "@/constants/error";
import {
  GetLibraryStoriesQuery,
  GetLibraryStoriesResponse,
  GetStoryBySlugAndIdResponse,
} from "@/services/story";
import { ErrorResponse } from "@/types/response";
import { isNextJSFetchError } from "@/utils/error";

async function getLibraryStories(
  query: GetLibraryStoriesQuery
): Promise<GetLibraryStoriesResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/library?skip=${query.skip}&limit=${query.limit}&q=${query.q}&plan=${query.plan}&genre=${query.genre}`
    );
    const responseData: GetLibraryStoriesResponse & ErrorResponse =
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

async function getStoryBySlugAndId(
  slugAndId: string
): Promise<GetStoryBySlugAndIdResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/${slugAndId}`
    );
    const responseData: GetStoryBySlugAndIdResponse & ErrorResponse =
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

export { getLibraryStories, getStoryBySlugAndId };

import { StoryReviewWithDetails, StoryType } from "@/components/Story";
import { NETWORK_ERROR } from "@/constants/error";
import { ErrorResponse } from "@/types/response";
import { isNextJSFetchError } from "@/utils/error";

interface GetLibraryStoriesQuery {
  skip: number;
  limit: number;
  q: string;
  plan: string;
  genre: string;
}

interface GetLibraryStoriesResponse {
  success: boolean;
  data: {
    stories: StoryType[];
    count: number;
  };
}

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

interface GetFeaturedStoriesResponse {
  success: boolean;
  data: {
    stories: StoryType[];
    reviews: StoryReviewWithDetails[];
  };
}

async function getFeaturedStories(): Promise<GetFeaturedStoriesResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/featured`
    );
    const responseData: GetFeaturedStoriesResponse & ErrorResponse =
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

interface GetStoryBySlugResponse {
  success: boolean;
  data: StoryType;
}

async function getStoryBySlug(slug: string): Promise<GetStoryBySlugResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/${slug}`
    );
    const responseData: GetStoryBySlugResponse & ErrorResponse =
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

interface GetStoryIdBySlugResponse {
  success: boolean;
  data: { _id: string };
}

async function getStoryIdBySlug(
  slug: string
): Promise<GetStoryIdBySlugResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/${slug}/id`
    );
    const responseData: GetStoryIdBySlugResponse & ErrorResponse =
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

export {
  getLibraryStories,
  getFeaturedStories,
  getStoryBySlug,
  getStoryIdBySlug,
  type GetLibraryStoriesQuery,
};

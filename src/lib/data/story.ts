import { StoryType } from "@/components/Story";
import {
  GetLibraryStoriesQuery,
  GetLibraryStoriesResponse,
} from "@/services/story";

export async function getLibraryStories(
  query: GetLibraryStoriesQuery
): Promise<GetLibraryStoriesResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/library?skip=${query.skip}&limit=${query.limit}&q=${query.q}&plan=${query.plan}&genre=${query.genre}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return response.json();
  } catch (error: any) {
    if (error.message === "fetch failed") {
      throw new Error("Service unavailable. Please try again later.");
    }

    throw new Error(
      error.message || "Service unavailable. Please try again later."
    );
  }
}

export async function getStoryBySlugAndId(
  slugAndId: string
): Promise<StoryType> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/${slugAndId}`
  );

  if (!response.ok) throw new Error("Failed to fetch story");

  return response.json();
}

import {
  GetLibraryStoriesQuery,
  GetLibraryStoriesResponse,
  GetStoryBySlugAndIdResponse,
} from "@/services/story";

async function getLibraryStories(
  query: GetLibraryStoriesQuery
): Promise<GetLibraryStoriesResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/library?skip=${query.skip}&limit=${query.limit}&q=${query.q}&plan=${query.plan}&genre=${query.genre}`
  );
  return response.json();
}

async function getStoryBySlugAndId(
  slugAndId: string
): Promise<GetStoryBySlugAndIdResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/${slugAndId}`
  );
  return response.json();
}

export { getLibraryStories, getStoryBySlugAndId };

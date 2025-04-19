import { StoryType } from "@/components/Story";
import { axiosClient } from "@/utils/axios-client";

interface GetLibraryStoriesQuery {
  skip: number;
  limit: number;
  q: string;
  plan: string;
  genre: string;
}

interface GetLibraryStoriesResponse {
  success: true;
  data: {
    stories: StoryType[];
    count: number;
  };
}

interface GetStoryBySlugAndIdResponse {
  success: true;
  data: StoryType;
}

class StoryService {
  async getLibraryStories(
    query: GetLibraryStoriesQuery
  ): Promise<GetLibraryStoriesResponse> {
    const response = await axiosClient.get(
      `/stories/library?skip=${query.skip}&limit=${query.limit}&q=${query.q}&plan=${query.plan}&genre=${query.genre}`
    );
    return response.data;
  }

  async findOneBySlugAndId(
    slugAndId: string
  ): Promise<GetStoryBySlugAndIdResponse> {
    const response = await axiosClient.get(`/stories/${slugAndId}`);
    return response.data;
  }
}

export {
  StoryService,
  type GetLibraryStoriesQuery,
  type GetLibraryStoriesResponse,
  type GetStoryBySlugAndIdResponse,
};

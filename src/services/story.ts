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
  success: boolean;
  data: {
    stories: StoryType[];
    count: number;
  };
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

  async findOneBySlugAndId(slugAndId: string): Promise<StoryType> {
    const response = await axiosClient.get(`/stories/${slugAndId}`);
    return response.data;
  }
}

export {
  StoryService,
  type GetLibraryStoriesQuery,
  type GetLibraryStoriesResponse,
};

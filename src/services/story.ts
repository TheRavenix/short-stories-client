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

interface GetStoryBySlugAndIdResponse {
  success: boolean;
  data: StoryType;
}

interface DownloadStoryResponse {
  success: boolean;
  data: Buffer<ArrayBuffer>;
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

  async readStory(storyId: string) {
    const response = await axiosClient.post(`/stories/read/${storyId}`);
    return response.data;
  }

  async downloadStory(storyId: string): Promise<DownloadStoryResponse> {
    const response = await axiosClient.post(`/stories/download/${storyId}`);
    return response.data;
  }
}

export {
  StoryService,
  type GetLibraryStoriesQuery,
  type GetLibraryStoriesResponse,
  type GetStoryBySlugAndIdResponse,
};

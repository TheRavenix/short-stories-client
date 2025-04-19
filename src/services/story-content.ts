import { StoryContentType } from "@/components/Story";
import { axiosClient } from "@/utils/axios-client";

interface GetStoryContentByStoryIdResponse {
  success: boolean;
  data: StoryContentType;
}

class StoryContentService {
  async findOneByStoryId(
    storyId: string
  ): Promise<GetStoryContentByStoryIdResponse> {
    const response = await axiosClient.get(`/story-contents/${storyId}`);
    return response.data;
  }
}

export { StoryContentService, type GetStoryContentByStoryIdResponse };

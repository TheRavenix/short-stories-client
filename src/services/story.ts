import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/constants/error";
import { axiosClient } from "@/utils/axios-client";
import { isNetworkError } from "@/utils/error";

interface DownloadStoryResponse {
  success: boolean;
  data: Buffer<ArrayBuffer>;
}

class StoryService {
  async readStory(storyId: string) {
    try {
      const response = await axiosClient.post(`/stories/read/${storyId}`);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to read this story"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async downloadStory(storyId: string): Promise<DownloadStoryResponse> {
    try {
      const response = await axiosClient.post(`/stories/download/${storyId}`);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to download this story"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }
}

export { StoryService };

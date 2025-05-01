import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/constants";
import { MessageResponse } from "@/types";
import { axiosClient, isNetworkError } from "@/utils";

interface CreateStoryData {
  name: string;
  description: string;
  about: string[];
  preview: string[];
  content: string[];
  genre: string[];
  plan: string;
  coverImage: string;
}

interface DownloadStoryResponse {
  success: boolean;
  data: Buffer<ArrayBuffer>;
}

class StoryService {
  async createStory(data: CreateStoryData): Promise<MessageResponse> {
    try {
      const response = await axiosClient.post("/stories", data);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to create story"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

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

  async deleteStory(storyId: string): Promise<MessageResponse> {
    try {
      const response = await axiosClient.delete(`/stories/${storyId}`);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to delete story"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }
}

export { StoryService, type CreateStoryData };

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

interface EditStoryData extends CreateStoryData {}

interface EditStoryResponse {
  success: boolean;
  data: {
    message: string;
    slug: string;
  };
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

  async editStory({
    storyId,
    data,
  }: {
    storyId: string;
    data: EditStoryData;
  }): Promise<EditStoryResponse> {
    try {
      const response = await axiosClient.patch(`/stories/${storyId}`, data);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(error.response.data?.message || "Failed to edit story");
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

  async downloadStory(storyId: string): Promise<Buffer<ArrayBuffer>> {
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

export { StoryService, type CreateStoryData, type EditStoryData };

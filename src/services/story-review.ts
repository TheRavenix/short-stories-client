import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/constants/error";
import { MessageResponse } from "@/types/response";
import { axiosClient } from "@/utils/axios-client";
import { isNetworkError } from "@/utils/error";

interface CreateStoryReviewData {
  storyId: string;
  stars: number;
  comment: string;
}

interface EditStoryReviewData {
  stars?: number;
  comment?: string;
}

class StoryReviewService {
  async createStoryReview(
    data: CreateStoryReviewData
  ): Promise<MessageResponse> {
    try {
      const response = await axiosClient.post("/story-reviews", data);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to post your review"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async editStoryReview({
    reviewId,
    data,
  }: {
    reviewId: string;
    data: EditStoryReviewData;
  }): Promise<MessageResponse> {
    try {
      const response = await axiosClient.patch(
        `/story-reviews/${reviewId}`,
        data
      );
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to edit your review"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async deleteStoryReview(reviewId: string): Promise<MessageResponse> {
    try {
      const response = await axiosClient.delete(`/story-reviews/${reviewId}`);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to delete story review"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }
}

export { StoryReviewService, type CreateStoryReviewData };

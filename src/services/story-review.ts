import { StoryReviewWithDetails } from "@/components/Story";
import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/constants/error";
import { axiosClient } from "@/utils/axios-client";
import { isNetworkError } from "@/utils/error";

interface GetStoryReviewsByStoryIdResponse {
  success: boolean;
  data: StoryReviewWithDetails[];
}

interface CreateStoryReviewResponse {
  success: boolean;
  message: string;
}

interface CreateStoryReviewData {
  storyId: string;
  stars: number;
  comment: string;
}

class StoryReviewService {
  async createStoryReview(
    data: CreateStoryReviewData
  ): Promise<CreateStoryReviewResponse> {
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
}

export {
  StoryReviewService,
  type GetStoryReviewsByStoryIdResponse,
  type CreateStoryReviewData,
};

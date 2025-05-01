import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/constants";
import { axiosClient, isNetworkError } from "@/utils";

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

export { StoryReviewService, type CreateStoryReviewData };

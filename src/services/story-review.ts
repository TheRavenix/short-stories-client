import { StoryReviewWithDetails } from "@/components/Story";
import { axiosClient } from "@/utils/axios-client";

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
  async getStoryReviewsByStoryId(
    storyId: string
  ): Promise<GetStoryReviewsByStoryIdResponse> {
    const response = await axiosClient.get(`/story-reviews/${storyId}`);
    return response.data;
  }

  async createStoryReview(
    data: CreateStoryReviewData
  ): Promise<CreateStoryReviewResponse> {
    const response = await axiosClient.post("/story-reviews", data);
    return response.data;
  }
}

export {
  StoryReviewService,
  type GetStoryReviewsByStoryIdResponse,
  type CreateStoryReviewData,
};

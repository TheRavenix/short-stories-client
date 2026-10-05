import { axiosClient } from "@/utils/axios-client";
import { MessageResponse } from "@/types/response";

export type CreateStoryReviewData = {
  stars: number
  comment: string
}

export async function createStoryReview(storyId: number, data: CreateStoryReviewData): Promise<MessageResponse> {
  const response = await axiosClient.post(`/story-reviews/${storyId}`, data)
  return response.data
}

export type EditStoryReviewData = Partial<CreateStoryReviewData>

export async function editStoryReview(reviewId: number, data: EditStoryReviewData): Promise<MessageResponse> {
  const response = await axiosClient.patch(
    `/story-reviews/${reviewId}`,
    data
  )
  return response.data
}

export async function deleteStoryReview(reviewId: number): Promise<MessageResponse> {
  const response = await axiosClient.delete(`/story-reviews/${reviewId}`)
  return response.data
}

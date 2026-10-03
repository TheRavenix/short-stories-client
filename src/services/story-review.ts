import { axiosClient } from "@/utils/axios-client";
import { MessageResponse } from "@/types/response";

type CreateStoryReviewData = {
  storyId: number
  stars: number
  comment: string
}

export async function createStoryReview(data: CreateStoryReviewData): Promise<MessageResponse> {
  const response = await axiosClient.post('/story-reviews', data)
  return response.data
}

export type EditStoryReviewData = {
  stars?: number
  comment?: string
}

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

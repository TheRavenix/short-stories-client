import { axiosClient } from '@/utils/axios-client'
import { MessageResponse } from '@/types/response'

export type CreateStoryData = {
  name: string
  description: string
  about: string[]
  preview: string[]
  content: string[]
  genre: string[]
  plan: string
  featured: boolean
  coverImage: string
}

export async function createStory(data: CreateStoryData): Promise<MessageResponse> {
  const response = await axiosClient.post('/stories', data)
  return response.data
}

export type EditStoryData = CreateStoryData

type EditStoryResponse = {
  slug: string
} & MessageResponse

export async function editStory(storyId: number, data: EditStoryData): Promise<EditStoryResponse> {
  const response = await axiosClient.patch(`/stories/${storyId}`, data)
  return response.data
}

export async function readStory(storyId: number) {
  const response = await axiosClient.post(`/stories/read/${storyId}`)
  return response.data
}

export async function downloadStory(storyId: number): Promise<Buffer<ArrayBuffer>> {
  const response = await axiosClient.post(`/stories/download/${storyId}`)
  return response.data
}

export async function deleteStory(storyId: number): Promise<MessageResponse> {
  const response = await axiosClient.delete(`/stories/${storyId}`)
  return response.data
}

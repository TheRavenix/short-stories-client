import { StoryType } from '@/components/Story'

export type GetLibraryStoriesQuery = {
  skip: number
  limit: number
  q: string
  plan: string
  genre: string
}

type GetLibraryStoriesResponse = {
  stories: StoryType[]
  count: number
}

export async function getLibraryStories(
  query: GetLibraryStoriesQuery
): Promise<GetLibraryStoriesResponse> {
  const response = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/library?skip=${query.skip}&limit=${query.limit}&q=${query.q}&plan=${query.plan}&genre=${query.genre}`
  )
  return await response.json()
}

export async function getFeaturedStories(): Promise<StoryType[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/featured`
  )
  return await response.json()
}

export async function getStoryBySlug(slug: string): Promise<StoryType> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/${slug}`
  )
  return await response.json()
}

export async function getStoryIdBySlug(
  slug: string
): Promise<Pick<StoryType, 'id'>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/${slug}/id`
  )
  return await response.json()
}

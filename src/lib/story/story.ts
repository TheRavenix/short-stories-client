import { StoryType } from '@/components/Story'

export type FindLibraryStoriesQuery = {
  skip?: number
  limit?: number
  q?: string
  plan?: string
  genre?: string
  order?: string
}

type FindLibraryStoriesResponse = {
  stories: StoryType[]
  count: number
}

export async function findLibraryStories(
  query: FindLibraryStoriesQuery
): Promise<FindLibraryStoriesResponse> {
  const response = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/library?skip=${query.skip}&limit=${query.limit}&q=${query.q}&plan=${query.plan}&genre=${query.genre}&order=${query.order}`
  )
  return await response.json()
}

export async function findFeaturedStories(): Promise<StoryType[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/featured`
  )
  return await response.json()
}

export async function findStoryBySlug(slug: string): Promise<StoryType> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/${slug}`
  )
  return await response.json()
}

export async function findStoryIdBySlug(
  slug: string
): Promise<Pick<StoryType, 'id'>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/stories/${slug}/id`
  )
  return await response.json()
}

import { BookIcon } from 'lucide-react'

import styles from './LibraryStoriesSection.module.css'

import { EmptyState } from '@/components/EmptyState'
import { Story } from '@/components/Story'
import { LibraryLoadMoreButton } from '../LibraryLoadMoreButton'
import { getLibraryStories, GetLibraryStoriesQuery } from '@/lib/story'
import { getStoryReviewsByStoryId } from '@/lib/story/story-review'

type Props = GetLibraryStoriesQuery

export async function LibraryStoriesSection(props: Props) {
  const libraryStories = await getLibraryStories({
    skip: props.skip,
    limit: props.limit,
    q: props.q ?? '',
    plan: props.plan ?? 'all-plans',
    genre: props.genre ?? 'all-genres'
  })

  if (libraryStories.stories.length > 0) {
    return (
      <>
        <div className={styles.stories}>
          {libraryStories.stories.map(async (story) => {
            const storyReviews = await getStoryReviewsByStoryId(story.id)
            return (
              <Story 
                key={story.id}
                className={styles.story}
                story={story}
                ratingCount={storyReviews.ratingCount}
              />
            )
          })}
        </div>
        <LibraryLoadMoreButton
          limit={props.limit}
          count={libraryStories.count}
        />
      </>
    )
  }

  return (
    <EmptyState
      icon={<BookIcon />}
      message='No stories available yet. Check back later for new adventures!'
    />
  )
}

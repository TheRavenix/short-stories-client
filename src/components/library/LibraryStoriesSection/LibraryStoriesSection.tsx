import { BookIcon } from 'lucide-react'

import styles from './LibraryStoriesSection.module.css'

import { EmptyState } from '@/components/EmptyState'
import { Story } from '@/components/Story'
import { LibraryLoadMoreButton } from '../LibraryLoadMoreButton'
import { findLibraryStories, FindLibraryStoriesQuery } from '@/lib/story'

type Props = FindLibraryStoriesQuery

export async function LibraryStoriesSection(props: Props) {
  const libraryStories = await findLibraryStories({
    skip: props.skip,
    limit: props.limit,
    q: props.q ?? '',
    plan: props.plan ?? 'all-plans',
    genre: props.genre ?? 'all-genres',
    order: props.order ?? 'random'
  })

  if (libraryStories.stories.length > 0) {
    return (
      <>
        <div className={styles.stories}>
          {libraryStories.stories.map((story) => {
            return (
              <Story 
                key={story.id}
                className={styles.story}
                story={story}
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

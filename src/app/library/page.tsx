import { BookIcon } from "lucide-react";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Story } from "@/components/Story";
import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { LibraryFilters } from "@/components/LibraryFilters";
import { LibraryLoadMoreButton } from "@/components/LibraryLoadMoreButton";
import { ErrorFallback } from "@/components/ErrorFallback";
import { Skeleton } from "@/components/Skeleton";

import { GetLibraryStoriesQuery } from "@/services/story";
import { PAGINATION_DEFAULT_LIMIT } from "@/constants/filter";
import { getLibraryStories } from "@/lib/data/story";

interface LibraryStoriesProps extends GetLibraryStoriesQuery {}

async function LibraryStories(props: LibraryStoriesProps) {
  const libraryStories = await getLibraryStories({
    skip: props.skip,
    limit: props.limit,
    q: props.q ?? "",
    plan: props.plan ?? "all-plans",
    genre: props.genre ?? "all-genres",
  });

  return (
    <Show
      when={libraryStories.data.stories.length > 0}
      fallback={
        <EmptyState
          icon={<BookIcon />}
          message="No stories available yet. Check back later for new adventures!"
        />
      }
    >
      <div className={styles.stories}>
        {libraryStories.data.stories.map((story) => (
          <Story key={story._id} {...story} />
        ))}
      </div>
      <LibraryLoadMoreButton
        limit={props.limit}
        count={libraryStories.data.count}
      />
    </Show>
  );
}

interface Props {
  searchParams: Promise<
    GetLibraryStoriesQuery & {
      limit: number;
    }
  >;
}

export default async function Library(props: Props) {
  const searchParams = await props.searchParams;
  const limit = searchParams.limit
    ? Number(searchParams.limit)
    : PAGINATION_DEFAULT_LIMIT;

  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <div className={styles.content}>
          <H1 className={styles.headline}>Library</H1>
          <Suspense>
            <LibraryFilters />
          </Suspense>
          <ErrorBoundary errorComponent={ErrorFallback}>
            <Suspense
              fallback={<Skeleton type="card" count={5} height="250px" />}
            >
              <LibraryStories
                skip={0}
                limit={limit}
                q={searchParams.q}
                plan={searchParams.plan}
                genre={searchParams.genre}
              />
            </Suspense>
          </ErrorBoundary>
        </div>
      </Container>
    </main>
  );
}

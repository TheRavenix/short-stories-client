import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { LibraryFilters } from "@/components/LibraryFilters";
import {
  LibraryStoriesSection,
  LibraryStoriesSectionError,
  LibraryStoriesSectionLoading,
} from "@/components/sections";
import { BackTopButton } from "@/components/buttons";

import { PAGINATION_DEFAULT_LIMIT } from "@/constants";
import { GetLibraryStoriesQuery } from "@/lib";

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
          <ErrorBoundary errorComponent={LibraryStoriesSectionError}>
            <Suspense fallback={<LibraryStoriesSectionLoading />}>
              <LibraryStoriesSection
                skip={0}
                limit={limit}
                q={searchParams.q}
                plan={searchParams.plan}
                genre={searchParams.genre}
              />
            </Suspense>
          </ErrorBoundary>
        </div>
        <BackTopButton />
      </Container>
    </main>
  );
}

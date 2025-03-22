import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Story } from "@/components/Story";
import { H1 } from "@/components/ui/Typography";

import { stories } from "@/utils/stories";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { BookIcon } from "lucide-react";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

export default function Library() {
  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <div className={styles.content}>
          <H1 className={styles.headline}>Library</H1>
          <Show
            when={stories.length > 0}
            fallback={
              <EmptyState icon={<BookIcon />} message="No stories to show." />
            }
          >
            <div className={styles.selects}>
              <Select value="all-types">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all-types">All Types</SelectItem>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select value="all-genres">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all-genres">All Genres</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="mystery">Mystery</SelectItem>
                    <SelectItem value="fantasy">Fantasy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select value="random">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="random">Random</SelectItem>
                    <SelectItem value="most-popular">Most Popular</SelectItem>
                    <SelectItem value="highest-rated">Highest Rated</SelectItem>
                    <SelectItem value="newest-first">Newest First</SelectItem>
                    <SelectItem value="oldest-first">Oldest First</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Input label="Search for stories" />
            <div className={styles.stories}>
              {stories.map((story) => (
                <Story key={story.id} {...story} />
              ))}
            </div>
          </Show>
        </div>
      </Container>
    </main>
  );
}

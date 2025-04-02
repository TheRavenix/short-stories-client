"use client";

import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import styles from "./StoryBookLayout.module.scss";

import { StoryContent, StoryContentType } from "../../StoryContent";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { P } from "@/components/ui/Typography";
import {
  Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/Slider";

import { chunkArray } from "@/utils/chunk-array";

interface Props {
  storyId: string;
  storyContent: StoryContentType;
}

const StoryBookLayout: React.FC<Props> = ({ storyId, storyContent }) => {
  const [page, setPage] = useState(0);
  const contentList = chunkArray(storyContent.content, 3);

  function moveTo(p: number) {
    if (p >= 0 && p < contentList.length) {
      setPage(p);
    }
  }

  return (
    <Card>
      <div className={styles.arrowLeftButtonWrapper}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            moveTo(page - 1);
          }}
        >
          <ArrowLeftIcon />
        </Button>
      </div>
      <div className={styles.page}>
        <StoryContent storyId={storyId} content={contentList[page]} />
      </div>
      <div className={styles.pageProgress}>
        <P variant="gray">
          {page + 1}/{contentList.length}
        </P>
        <Slider
          value={[page]}
          onValueChange={(vl) => setPage(vl[0])}
          max={contentList.length - 1}
          step={1}
        >
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb aria-label="Page" />
        </Slider>
      </div>
      <div className={styles.arrowRightButtonWrapper}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            moveTo(page + 1);
          }}
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </Card>
  );
};

export { StoryBookLayout };

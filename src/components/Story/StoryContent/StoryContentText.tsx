"use client";

import clsx from "clsx";

import styles from "./StoryContent.module.scss";

import { P, ParagraphProps } from "@/components/ui/Typography";

import { useStoryReadStore } from "@/stores/story";

interface Props extends ParagraphProps {}

const StoryContentText: React.FC<Props> = ({ className, style, ...rest }) => {
  const fontSize = useStoryReadStore((s) => s.fontSize);

  return (
    <P
      className={clsx(styles.contentText, className)}
      style={{ ...style, fontSize }}
      {...rest}
    />
  );
};

export { StoryContentText };

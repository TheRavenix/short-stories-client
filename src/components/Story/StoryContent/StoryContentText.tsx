"use client";

import clsx from "clsx";

import styles from "./StoryContent.module.scss";

import { P, ParagraphProps } from "@/components/ui/Typography";

import { useFontStore } from "@/stores/font";

interface Props extends ParagraphProps {}

const StoryContentText: React.FC<Props> = ({ className, style, ...rest }) => {
  const readingFontSize = useFontStore((s) => s.readingFontSize);

  return (
    <P
      className={clsx(styles.text, className)}
      style={{ ...style, fontSize: readingFontSize }}
      {...rest}
    />
  );
};

export { StoryContentText };

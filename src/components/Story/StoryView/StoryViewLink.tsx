"use client";

import Link, { LinkProps } from "next/link";
import { ComponentProps, useEffect, useState } from "react";

type Props = LinkProps & ComponentProps<"a"> & {};

const StoryViewLink: React.FC<Props> = ({ href, ...rest }) => {
  const [viewHref, setViewHref] = useState(href);

  useEffect(() => {
    const storyView = localStorage.getItem("story-view");
    setViewHref(storyView !== null ? `${href}?view=${storyView}` : href);
  }, [href]);

  return <Link href={viewHref} {...rest} />;
};

export { StoryViewLink };

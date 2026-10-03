"use client";

import Link, { LinkProps } from "next/link";
import { ComponentProps, useEffect, useState } from "react";

import { useStoryStore } from "@/stores/story";

type Props = LinkProps & ComponentProps<"a">

export function StoryViewLink({ href, ...rest }: Props) {
  const [viewHref, setViewHref] = useState(href)
  const storyView = useStoryStore((s) => s.storyView)

  useEffect(() => {
    setViewHref(
      Boolean(storyView)
        ? `${href}${storyView === 'tabs' ? `?view=${storyView}` : ''}`
        : href
    )
  }, [href, storyView])

  return <Link href={viewHref} {...rest} />
}

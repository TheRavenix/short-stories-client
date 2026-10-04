"use client";

import { useRouter } from "next/navigation";
import { LayoutPanelTopIcon, TableOfContentsIcon } from "lucide-react";

import styles from "./StoryViewToggle.module.css";

import { Button } from "../../../ui/Button";
import { useStoryStore } from "@/stores/story";

type Props =  {
  slug: string
  currentView: string
}

export function StoryViewToggle({ slug, currentView }: Props) {
  const router = useRouter()
  const setStoryView = useStoryStore((s) => s.setStoryView)

  const handleOnClick = (view: string) => {
    if (view !== currentView) {
      router.push(`/s/${slug}?view=${view}`, {
        scroll: false
      })
      setStoryView(view)
    }
  }

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleActions}>
        <Button
          size='icon'
          variant={currentView === 'grid' ? 'primary' : 'inverse'}
          onClick={() => handleOnClick('grid')}
        >
          <TableOfContentsIcon size={20} />
        </Button>
        <Button
          size='icon'
          variant={currentView === 'tabs' ? 'primary' : 'inverse'}
          onClick={() => handleOnClick('tabs')}
        >
          <LayoutPanelTopIcon size={20} />
        </Button>
      </div>
    </div>
  )
}

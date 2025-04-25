"use client";

import { useRouter } from "next/navigation";
import { LayoutPanelTopIcon, TableOfContentsIcon } from "lucide-react";

import styles from "./StoryViewToggle.module.scss";

import { Button } from "../../../ui/Button";

import { useStoryStore } from "@/stores/story";

import { slugify } from "@/utils/slugify";

interface Props {
  id: string;
  name: string;
  currentView: string;
}

const StoryViewToggle: React.FC<Props> = ({ id, name, currentView }) => {
  const router = useRouter();
  const setStoryView = useStoryStore((s) => s.setStoryView);

  function handleOnClick(view: string) {
    if (view !== currentView) {
      router.push(`/library/${slugify(name)}-${id}?view=${view}`, {
        scroll: false,
      });
      setStoryView(view);
    }
  }

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleActions}>
        <Button
          size="icon"
          variant={currentView === "grid" ? "primary" : "inverse"}
          onClick={() => handleOnClick("grid")}
        >
          <TableOfContentsIcon size={20} />
        </Button>
        <Button
          size="icon"
          variant={currentView === "tabs" ? "primary" : "inverse"}
          onClick={() => handleOnClick("tabs")}
        >
          <LayoutPanelTopIcon size={20} />
        </Button>
      </div>
    </div>
  );
};

export { StoryViewToggle };

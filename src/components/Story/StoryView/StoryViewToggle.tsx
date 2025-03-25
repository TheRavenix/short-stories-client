"use client";

import { useRouter } from "next/navigation";

import styles from "./StoryView.module.scss";

import { Span } from "../../ui/Typography";
import { Button } from "../../ui/Button";

interface Props {
  id: string;
  currentView: string;
}

const StoryViewToggle: React.FC<Props> = ({ id, currentView }) => {
  const router = useRouter();

  function handleOnClick(view: string) {
    if (view !== currentView) {
      router.push(`/library/${id}?view=${view}`);
      localStorage.setItem("story-view", view);
    }
  }

  return (
    <div className={styles.toggleContainer}>
      <Span weight="bold" transform="uppercase">
        View
      </Span>
      <div className={styles.toggleActions}>
        <Button
          size="sm"
          variant={currentView === "grid" ? "primary" : "inverse"}
          onClick={() => handleOnClick("grid")}
        >
          Grid
        </Button>
        <Button
          size="sm"
          variant={currentView === "tabs" ? "primary" : "inverse"}
          onClick={() => handleOnClick("tabs")}
        >
          Tabs
        </Button>
      </div>
    </div>
  );
};

export { StoryViewToggle };

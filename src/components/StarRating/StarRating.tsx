"use client";

import { StarIcon } from "lucide-react";

import styles from "./StarRating.module.scss";
import clsx from "clsx";

interface StarRatingProps {
  rating: number;
  setRating?: React.Dispatch<React.SetStateAction<number>>;
  interactive?: boolean;
}

const STAR_RATING_LIST = [1, 2, 3, 4, 5] as const;
const STAR_RATING_MIN = Math.min(...STAR_RATING_LIST);
const STAR_RATING_MAX = Math.max(...STAR_RATING_LIST);

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  setRating,
  interactive = false,
}) => {
  const roundedStars = Math.round(rating);

  function handleInteractivity(starRating: number) {
    if (!interactive || typeof setRating !== "function") return;

    setRating(starRating);
  }

  return (
    <div className={styles.starRatingStars}>
      {STAR_RATING_LIST.map((starRating, i) => (
        <StarIcon
          key={i}
          size={22}
          className={clsx({
            [styles.starred]: starRating <= roundedStars,
            [styles.unstarred]: starRating > roundedStars,
          })}
          onClick={() => handleInteractivity(starRating)}
          onMouseEnter={() => handleInteractivity(starRating)}
        />
      ))}
    </div>
  );
};

export { StarRating, type StarRatingProps, STAR_RATING_MIN, STAR_RATING_MAX };

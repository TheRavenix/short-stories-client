"use client";

import { StarIcon } from "lucide-react";

import styles from "./StarRating.module.css";

import clsx from "clsx";

export type StarRatingProps = {
  rating: number
  setRating?: React.Dispatch<React.SetStateAction<number>>
  interactive?: boolean
}

const STAR_RATING_LIST = [1, 2, 3, 4, 5] as const
export const STAR_RATING_MIN = Math.min(...STAR_RATING_LIST)
export const STAR_RATING_MAX = Math.max(...STAR_RATING_LIST)

export function StarRating({
  rating,
  setRating,
  interactive = false
}: StarRatingProps) {
  const roundedStars = Math.round(rating)

  const handleInteractivity = (starRating: number) => {
    if (!interactive || setRating === undefined) {
      return
    }

    setRating(starRating)
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
  )
}

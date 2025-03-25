import { StarHalfIcon, StarIcon } from "lucide-react";
import clsx from "clsx";

import styles from "./StarRating.module.scss";

import { P } from "../ui/Typography";

interface Props {
  stars: number;
  fixedWidth?: boolean;
}

const STAR_RATING_MIN = 1;
const STAR_RATING_MAX = 5;

const StarRating: React.FC<Props> = ({ stars, fixedWidth = false }) => {
  const starsDecimal = stars - Math.floor(stars);
  const finalStarsDecimal =
    starsDecimal < 0.25
      ? 0
      : starsDecimal >= 0.25 && starsDecimal < 0.75
      ? 0.5
      : 1;
  const finalStars = Number(Math.floor(stars) + finalStarsDecimal).toFixed(1);

  return (
    <div
      className={clsx(
        styles.starRating,
        fixedWidth && styles.starRatingFixedWidth
      )}
    >
      <div className={styles.starRatingStars}>
        {Array(Number(Math.floor(stars)))
          .fill(0)
          .map((_, i) => (
            <StarIcon key={i} size={20} className={styles.icon} />
          ))}
        {finalStarsDecimal === 0.5 && (
          <StarHalfIcon size={20} className={styles.icon} />
        )}
        {finalStarsDecimal === 1 && (
          <StarIcon size={20} className={styles.icon} />
        )}
      </div>
      <P size="lg" weight="bold">
        {finalStars}
      </P>
    </div>
  );
};

export { StarRating, STAR_RATING_MIN, STAR_RATING_MAX };

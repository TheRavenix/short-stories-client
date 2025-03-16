import { StarHalfIcon, StarIcon } from "lucide-react";

import styles from "./StarRating.module.scss";

import { P } from "../ui/Typography";

interface Props {
  stars: number;
}

const StarRating: React.FC<Props> = ({ stars }) => {
  const starsDecimal = stars - Math.floor(stars);
  const finalStarsDecimal =
    starsDecimal < 0.25
      ? 0
      : starsDecimal >= 0.25 && starsDecimal < 0.75
      ? 0.5
      : 1;
  const finalStars = Number(Math.floor(stars) + finalStarsDecimal).toFixed(1);

  return (
    <div className={styles.storyRating}>
      <div className={styles.storyRatingStars}>
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

export { StarRating };

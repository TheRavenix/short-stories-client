import { MessageCircleIcon } from "lucide-react";

import styles from "./FeaturedReviewsSection.module.css";

import { H1 } from "@/components/ui/Typography";
import { EmptyState } from "@/components/EmptyState";
import { Card, CardContent } from "@/components/ui/Card";
import { StoryReview, StoryReviewDetails, StoryReviewType } from "@/components/Story/StoryReview";

type Props = {
  reviews: StoryReviewType[]
  reviewsDetails: StoryReviewDetails[]
}

export function FeaturedReviewsSection({
 reviews,
 reviewsDetails 
}: Props) {
  return (
    <div className={styles.reviews}>
      <H1 transform='capitalize' className={styles.headline}>
        Featured reviews
      </H1>
      {
        reviews.length > 0 ?
          <div className={styles.reviewsList}>
            {reviews.map((review) => {
              const reviewDetails = reviewsDetails.find((details) => details.storyId === review.storyId)

              if (reviewDetails === undefined) {
                return null
              }

              return (
                <Card key={review.id}>
                 <CardContent className={styles.reviewsCardContent}>
                  <StoryReview
                    review={review}
                    reviewDetails={reviewDetails}
                    isSeparatorShown={false}
                    isStoryNameBadgeShown={true}
                    isReadMoreLinkShown={true}
                  />
                 </CardContent>
               </Card>
              )
            })}
          </div> :
          <EmptyState
            icon={<MessageCircleIcon />}
            message='No featured reviews at the moment.'
          />
      }
    </div>
  )
}

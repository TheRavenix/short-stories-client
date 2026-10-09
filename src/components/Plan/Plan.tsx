import { CheckIcon, XIcon } from 'lucide-react'

import styles from './Plan.module.css'

import { Card, CardContent, CardHeader } from '../ui/Card'
import { H2, H3, P, Span } from '../ui/Typography'
import { Button } from '../ui/Button'
import { PlanFeature } from '@/data/plans'

export type PlanType = 'free' | 'pro'

export type Props = {
  type: PlanType
  price: number
  duration?: string
  isCurrentPlan?: boolean
  planFeatures: PlanFeature[]
}

export function Plan({
  type,
  price,
  duration,
  isCurrentPlan = false,
  planFeatures
}: Props) {
  return (
    <Card>
      <CardHeader className={styles.planCardHeader}>
        <H2 variant='primary' transform='capitalize'>
          {type}
        </H2>
      </CardHeader>
      <CardContent className={styles.planCardContent}>
        <H3>${price.toFixed(2)}</H3>
        {duration !== undefined && <P>{duration}</P>}
        {planFeatures.map((feature) => {
          return (
            <div key={feature.name} className={styles.planFeature}>
              <P size='lg' variant='gray'>
                {feature.name}
              </P>
              {
                !feature.checked && <XIcon size={18} className={styles.xIcon} />
              }
              {
                feature.checked && feature.suffix !== undefined ?
                 <div className={styles.planSuffixContainer}>
                    <CheckIcon size={18} className={styles.checkIcon} />
                    <Span variant='primary'>{feature.suffix}</Span>
                 </div> :
                 <CheckIcon size={18} className={styles.checkIcon} />
              }
            </div>
          )
        })}
        {
          !isCurrentPlan ?
           <Button className={styles.planJoinButton}>Join Now</Button> :
           <P>This is your current plan.</P>
        }
      </CardContent>
    </Card>
  )
}

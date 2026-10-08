'use client'

import styles from './SubscriptionSettingsCard.module.css'

import { Badge } from '@/components/ui/Badge'
import { SettingsCard } from '../SettingsCard'
import { LabelRow } from '@/components/LabelRow'
import { useProfile } from '@/hooks/profile'
import { Button } from '@/components/ui/Button'

export function SubscriptionSettingsCard() {
  const { profile } = useProfile()

  return (
    <SettingsCard
      title='Subscription Settings'
      description='Here you can change your subscription settings'
    >
      <LabelRow label='Current subscription plan'>
        <Badge className={styles.planBadge}>{profile?.plan}</Badge>
      </LabelRow>
      {
        profile?.plan === 'pro' &&
        <LabelRow label='Cancel your subscription'>
          <Button size='sm' variant='inverse'>
            Cancel
          </Button>
        </LabelRow>
      }
    </SettingsCard>
  )
}

'use client'

import { SettingsCard } from '../SettingsCard'
import { EditName } from './EditName'
import { EditEmail } from './EditEmail'
import { ChangePassword } from './ChangePassword'
import { DeleteAccount } from './DeleteAccount'
import { SignOut } from './SignOut'
import { Skeleton } from '@/components/Skeleton'
import { LabelRow } from '@/components/LabelRow'
import { useAuthStore } from '@/stores/auth'
import { useProfile } from '@/hooks/profile'

export function AccountSettingsCard() {
  const { isLoading } = useProfile()
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  if (isLoading) {
    return <Skeleton type='card' />
  }
  if (!isAuthenticated) {
    return null
  }

  return (
    <SettingsCard
      title='Account Settings'
      description='Here you can change your account settings'
    >
      <LabelRow label='Edit your name'>
        <EditName />
      </LabelRow>
      <LabelRow label='Edit your email'>
        <EditEmail />
      </LabelRow>
      <LabelRow label='Change your password'>
        <ChangePassword />
      </LabelRow>
      <LabelRow label='Sign out from current session'>
        <SignOut />
      </LabelRow>
      <LabelRow label='Delete your account'>
        <DeleteAccount />
      </LabelRow>
    </SettingsCard>
  )
}

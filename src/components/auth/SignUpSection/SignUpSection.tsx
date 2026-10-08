"use client";

import styles from "./SignUpSection.module.css";

import { H1 } from "../../ui/Typography";
import { Skeleton } from "@/components/Skeleton";
import { SignUpForm } from "../SignUpForm";
import { useAuthStore } from "@/stores/auth";
import { useProfile } from "@/hooks/profile";

export function SignUpSection() {
  const { isLoading } = useProfile()
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  if (isLoading) {
    return (
      <div className={styles.signUp}>
        <H1 transform='capitalize' className={styles.headline}>
          Sign up
        </H1>
        <Skeleton type='card' />
      </div>
    )
  }
  if (isAuthenticated) {
    return null
  }

  return (
    <div className={styles.signUp}>
      <H1 transform='capitalize' className={styles.headline}>
        Sign up
      </H1>
      <SignUpForm />
    </div>
  )
}

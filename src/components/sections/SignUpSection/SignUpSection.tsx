"use client";

import styles from "./SignUpSection.module.scss";

import { SignUpForm } from "../../forms";
import { H1 } from "../../ui/Typography";

import { useAuthStore } from "@/stores/auth";
import { useProfile } from "@/hooks/profile";
import { Skeleton } from "@/components/Skeleton";

interface Props {}

const SignUpSection: React.FC<Props> = () => {
  const { isLoading } = useProfile();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (isLoading) {
    return (
      <div className={styles.signUp}>
        <H1 transform="capitalize" className={styles.headline}>
          Sign up
        </H1>
        <Skeleton type="card" />
      </div>
    );
  }

  if (isAuthenticated) return null;

  return (
    <div className={styles.signUp}>
      <H1 transform="capitalize" className={styles.headline}>
        Sign up
      </H1>
      <SignUpForm />
    </div>
  );
};

export { SignUpSection };

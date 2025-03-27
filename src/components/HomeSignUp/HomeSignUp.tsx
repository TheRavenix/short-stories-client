"use client";

import styles from "./HomeSignUp.module.scss";

import { SignUpForm } from "../SignUpForm";
import { H1 } from "../ui/Typography";

import { useAuthStore } from "@/stores/auth";

interface Props {}

const HomeSignUp: React.FC<Props> = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

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

export { HomeSignUp };

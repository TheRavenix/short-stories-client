"use client";

import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { XIcon } from "lucide-react";

import styles from "./SignInForm.module.scss";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { P } from "@/components/ui/Typography";
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/Toast";

import { SignInData } from "@/services/auth";
import { services } from "@/services";

interface Props {}

const SignInForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState<SignInData>({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: services.auth.signIn,
    onSuccess(data) {
      window.location.replace("/");
    },
  });

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(formData);
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSignIn}>
        <Input
          type="email"
          label="Email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Input
          type="password"
          label="Password"
          required
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <div className={styles.endContent}>
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Loading..." : "Sign in"}
          </Button>
          <P variant="gray">
            You don't have an account?{" "}
            <Link href="/sign-up" className={styles.signUpLink}>
              Sign up
            </Link>
          </P>
        </div>
      </form>
      {mutation.isError && (
        <ToastRoot>
          <ToastTitle>Error sign in</ToastTitle>
          <ToastDescription variant="error">
            {mutation.error?.message}
          </ToastDescription>
          <ToastAction altText="Action" asChild>
            <Button size="icon" variant="ghost">
              <XIcon size={20} />
            </Button>
          </ToastAction>
        </ToastRoot>
      )}
    </>
  );
};

export { SignInForm };

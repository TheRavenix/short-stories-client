"use client";

import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { XIcon } from "lucide-react";

import styles from "./SignUpForm.module.scss";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { P } from "@/components/ui/Typography";
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "../../ui/Toast";

import { SignUpData } from "@/services/auth";
import { services } from "@/services";

interface Props {}

const SignUpForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState<SignUpData>({
    name: undefined,
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: services.auth.signUp,
    onSuccess(data) {
      window.location.replace("/");
    },
  });

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(formData);
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSignUp}>
        <Input
          label="Your Name (Optional)"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
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
            {mutation.isPending ? "Loading..." : "Sign up"}
          </Button>
          <div className={styles.linksContainer}>
            <P variant="gray">
              You already have an account?{" "}
              <Link href="/sign-in" className={styles.signInLink}>
                Sign in
              </Link>
            </P>
            <P variant="gray">
              By creating an account you agree to our{" "}
              <Link href="/terms" className={styles.signInLink}>
                Terms & Conditions
              </Link>
            </P>
          </div>
        </div>
      </form>
      {mutation.isError && (
        <ToastRoot>
          <ToastTitle>Error sign up</ToastTitle>
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

export { SignUpForm };

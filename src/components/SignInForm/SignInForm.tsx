"use client";

import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import styles from "./SignInForm.module.scss";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { P } from "../ui/Typography";

import { SignInData } from "@/service/auth";
import { service } from "@/service";

interface Props {}

const SignInForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState<SignInData>({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: service.auth.signIn,
    onSuccess(data) {
      window.location.replace("/");
    },
    onError(error: AxiosError<{ message: string }>) {
      alert(error.response?.data.message);
    },
  });

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(formData);
  }

  return (
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
  );
};

export { SignInForm };

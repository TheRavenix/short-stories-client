"use client";

import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import styles from "./SignInForm.module.scss";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { P } from "@/components/ui/Typography";
import { Form } from "@/components/Form";

import { useToastStore } from "@/stores";

import { SignInData } from "@/services/auth";
import { services } from "@/services";

interface Props {}

const SignInForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState<SignInData>({
    email: "",
    password: "",
  });
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationFn: services.auth.signIn,
    onSuccess(data) {
      addToast({
        title: "Sign in",
        description: data.message,
      });
      window.location.replace("/");
    },
    onError(error) {
      addToast({
        title: "Error sign in",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    mutation.mutate(formData);
  }

  return (
    <Form spacing="md" onSubmit={handleSignIn}>
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
        <P variant="gray">
          You don't have an account?{" "}
          <Link href="/sign-up" className={styles.signUpLink}>
            Sign up
          </Link>
        </P>
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Loading..." : "Sign in"}
        </Button>
      </div>
    </Form>
  );
};

export { SignInForm };

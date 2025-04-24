"use client";

import { useMutation } from "@tanstack/react-query";
import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/Toast";

import { services } from "@/services";

interface Props {}

const SignOut: React.FC<Props> = () => {
  const mutation = useMutation({
    mutationFn: services.auth.signOut,
    onSuccess(data) {
      localStorage.clear();
      window.location.replace("/sign-in");
    },
  });

  return (
    <>
      <Button
        size="sm"
        variant="destructive"
        onClick={() => mutation.mutate()}
        disabled={mutation.isPending}
      >
        Sign out
      </Button>
      {mutation.isError && (
        <ToastRoot>
          <ToastTitle>Error sign out</ToastTitle>
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

export { SignOut };

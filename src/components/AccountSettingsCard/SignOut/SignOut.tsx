"use client";

import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/Button";

import { service } from "@/service";

interface Props {}

const SignOut: React.FC<Props> = () => {
  const mutation = useMutation({
    mutationFn: service.auth.signOut,
    onSuccess(data) {
      localStorage.clear();
      window.location.replace("/sign-in");
    },
  });

  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
    >
      Sign out
    </Button>
  );
};

export { SignOut };

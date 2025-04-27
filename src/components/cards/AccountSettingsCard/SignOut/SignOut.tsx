"use client";

import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/Button";

import { useToastStore } from "@/stores";

import { services } from "@/services";

interface Props {}

const SignOut: React.FC<Props> = () => {
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationFn: services.auth.signOut,
    onSuccess(data) {
      addToast({
        title: "Done",
        description: data.message,
      });
      localStorage.clear();
      window.location.replace("/sign-in");
    },
    onError(error) {
      addToast({
        title: "Error sign out",
        description: error.message,
        variant: "error",
      });
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

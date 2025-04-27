"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/Button";

import { useAuthStore, useToastStore } from "@/stores";

import { services } from "@/services";
import { downloadFile } from "@/utils";

interface Props {
  id: string;
  name: string;
}

const StoryDownloadButton: React.FC<Props> = ({ id, name }) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationKey: ["download-story"],
    mutationFn: services.story.downloadStory,
    onSuccess(data) {
      const url = window.URL.createObjectURL(new Blob([data.data]));
      downloadFile(url, `${name}.pdf`);
      window.URL.revokeObjectURL(url);
    },
    onError(error) {
      addToast({
        title: "Error download story",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleDownload() {
    if (!isAuthenticated) {
      router.push("/sign-in");
      return;
    }

    mutation.mutate(id);
  }

  return (
    <Button
      variant="inverse"
      onClick={handleDownload}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? "Loading..." : "Download"}
    </Button>
  );
};

export { StoryDownloadButton };

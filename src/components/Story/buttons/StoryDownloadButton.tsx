"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { XIcon } from "lucide-react";

import { Button } from "../ui/Button";
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/Toast";

import { useAuthStore } from "@/stores/auth";

import { services } from "@/services";
import { downloadFile } from "@/utils/download-file";

interface Props {
  id: string;
  name: string;
}

const StoryDownloadButton: React.FC<Props> = ({ id, name }) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const mutation = useMutation({
    mutationKey: ["download-story"],
    mutationFn: services.story.downloadStory,
    onSuccess(data, variables, context) {
      const url = window.URL.createObjectURL(new Blob([data.data]));
      downloadFile(url, `${name}.pdf`);
      window.URL.revokeObjectURL(url);
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
    <>
      <Button
        variant="inverse"
        onClick={handleDownload}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Loading..." : "Download"}
      </Button>
      {mutation.isError && (
        <ToastRoot>
          <ToastTitle>Error download story</ToastTitle>
          <ToastDescription variant="error">
            {mutation.error.message}
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

export { StoryDownloadButton };

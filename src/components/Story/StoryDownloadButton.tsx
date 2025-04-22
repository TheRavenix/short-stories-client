"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { Button } from "../ui/Button";

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

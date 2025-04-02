"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { Button } from "../ui/Button";

import { useProfile } from "@/hooks/profile";

import { services } from "@/services";
import { downloadFile } from "@/utils/download-file";

interface Props {
  name: string;
}

const StoryDownloadButton: React.FC<Props> = ({ name }) => {
  const router = useRouter();
  const { profile } = useProfile();
  const mutation = useMutation({
    mutationKey: ["generate-pdf"],
    mutationFn: services.user.generatePdf,
    onSuccess(data, variables, context) {
      const url = window.URL.createObjectURL(new Blob([data]));
      downloadFile(url, `${name}.pdf`);
      window.URL.revokeObjectURL(url);
    },
  });

  function handleDownload() {
    if (profile?.plan !== "pro") {
      router.push("/plans?plan=pro");
      return;
    }

    mutation.mutate();
  }

  return (
    <Button
      variant="inverse"
      onClick={handleDownload}
      disabled={mutation.isPending}
    >
      Download
    </Button>
  );
};

export { StoryDownloadButton };

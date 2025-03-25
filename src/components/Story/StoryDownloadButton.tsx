"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/Button";

import { downloadFile } from "@/utils/download-file";

interface Props {
  coverImage: string;
  isFree: boolean;
}

const StoryDownloadButton: React.FC<Props> = ({ coverImage, isFree }) => {
  const router = useRouter();

  function handleDownload() {
    if (!isFree) {
      router.push("/plans?plan=pro");
      return;
    }

    downloadFile(`${window.location.origin}${coverImage}`);
  }

  return (
    <Button variant="inverse" onClick={handleDownload}>
      Download
    </Button>
  );
};

export { StoryDownloadButton };

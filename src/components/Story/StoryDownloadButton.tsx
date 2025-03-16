"use client";

import { Button } from "../ui/Button";

import { downloadFile } from "@/utils/download-file";

interface Props {
  coverImage: string;
  isFree: boolean;
}

const StoryDownloadButton: React.FC<Props> = ({ coverImage, isFree }) => {
  function handleDownload() {
    if (!isFree) return;

    downloadFile(`${window.location.origin}${coverImage}`);
  }

  return <Button onClick={handleDownload}>Download</Button>;
};

export { StoryDownloadButton };

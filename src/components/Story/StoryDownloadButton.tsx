"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/Button";

import { downloadFile } from "@/utils/download-file";
import { PlanType } from "../Plan";

interface Props {
  coverImage: string;
  isFree: boolean;
}

const userPlan: PlanType = "free";

const StoryDownloadButton: React.FC<Props> = ({ coverImage, isFree }) => {
  const router = useRouter();

  function handleDownload() {
    if (!isFree && userPlan !== "pro") {
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

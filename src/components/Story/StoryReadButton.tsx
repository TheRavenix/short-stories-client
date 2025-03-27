"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/Button";

import { PlanType } from "../Plans";

interface Props {
  id: string;
  isFree: boolean;
}

const userPlan: PlanType = "free";

const StoryReadButton: React.FC<Props> = ({ id, isFree }) => {
  const router = useRouter();

  function handleRead() {
    if (!isFree && userPlan !== "pro") return;

    router.push(`/library/${id}/read`);
  }

  return <Button onClick={handleRead}>Read</Button>;
};

export { StoryReadButton };

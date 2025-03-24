"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/Button";

interface Props {
  id: string;
  isFree: boolean;
}

const isProUser = false;

const StoryReadButton: React.FC<Props> = ({ id, isFree }) => {
  const router = useRouter();

  function handleRead() {
    if (!isFree && !isProUser) return;

    router.push(`/library/${id}/read`);
  }

  return <Button onClick={handleRead}>Read</Button>;
};

export { StoryReadButton };

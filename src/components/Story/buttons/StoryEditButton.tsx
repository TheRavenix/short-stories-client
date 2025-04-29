"use client";

import Link from "next/link";

import { Button } from "@/components/ui/Button";

import { useProfile } from "@/hooks";

interface Props {
  storySlug: string;
}

const StoryEditButton: React.FC<Props> = ({ storySlug }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading || profile?.role !== "admin") return null;

  return (
    <Link href={`/s/${storySlug}/edit`}>
      <Button>Edit</Button>
    </Link>
  );
};

export { StoryEditButton };

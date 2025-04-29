"use client";

import { Button } from "@/components/ui/Button";

import { useProfile } from "@/hooks";

interface Props {
  storyId: string;
}

const StoryDeleteButton: React.FC<Props> = ({ storyId }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading || profile?.role !== "admin") return null;

  return <Button variant="destructive">Delete</Button>;
};

export { StoryDeleteButton };

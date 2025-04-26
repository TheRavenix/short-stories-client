"use client";

import { useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";

import { services } from "@/services";
import { STORY_READ_TIMEOUT_MS } from "@/constants";

interface Props {
  storyId: string;
}

const StoryReadTracker: React.FC<Props> = ({ storyId }) => {
  const storyReadTimeout = useRef<NodeJS.Timeout>(null!);

  const mutation = useMutation({
    mutationKey: ["read-story"],
    mutationFn: services.story.readStory,
  });

  useEffect(() => {
    storyReadTimeout.current = setTimeout(() => {
      mutation.mutate(storyId);
    }, STORY_READ_TIMEOUT_MS);

    return () => clearTimeout(storyReadTimeout.current);
  }, []);

  return null;
};

export { StoryReadTracker };

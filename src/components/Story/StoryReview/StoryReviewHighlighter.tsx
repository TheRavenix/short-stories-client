"use client";

import { useEffect } from "react";

import { useProfile } from "@/hooks";
import { useAuthStore } from "@/stores";

import { GetStoryReviewsByStoryIdResponse } from "@/lib";

interface Props {
  storyReviewsResponse: GetStoryReviewsByStoryIdResponse;
}

const StoryReviewHighlighter: React.FC<Props> = ({ storyReviewsResponse }) => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const { profile } = useProfile();

  useEffect(() => {
    if (!isAuthenticated) return;

    const reviewUserNameList = document.querySelectorAll(
      "[data-review-user-id]"
    );
    reviewUserNameList.forEach((userNameElm) => {
      if (userNameElm.getAttribute("data-review-user-id") === profile?._id) {
        userNameElm.setAttribute("data-highlighted", "true");
      }
    });
  }, [isAuthenticated, profile, storyReviewsResponse]);

  return null;
};

export { StoryReviewHighlighter };

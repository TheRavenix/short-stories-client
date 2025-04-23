import { StoryContentType } from "@/components/Story";

interface GetStoryContentByStoryIdResponse {
  success: boolean;
  data: StoryContentType;
}

class StoryContentService {}

export { StoryContentService, type GetStoryContentByStoryIdResponse };

import { AuthService } from "./auth";
import { ProFontService } from "./pro-font";
import { ProThemeService } from "./pro-theme";
import { StoryService } from "./story";
import { StoryContentService } from "./story-content";
import { StoryReviewService } from "./story-review";
import { UserService } from "./user";

class Services {
  readonly auth = new AuthService();
  readonly user = new UserService();
  readonly proTheme = new ProThemeService();
  readonly proFont = new ProFontService();
  readonly story = new StoryService();
  readonly storyContent = new StoryContentService();
  readonly storyReview = new StoryReviewService();
}

export const services = new Services();

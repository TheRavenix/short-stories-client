import { AuthService } from "./auth";
import { ProFontService } from "./pro-font";
import { ProThemeService } from "./pro-theme";
import { StoryService } from "./story";
import { UserService } from "./user";

class Services {
  readonly auth = new AuthService();
  readonly user = new UserService();
  readonly proTheme = new ProThemeService();
  readonly proFont = new ProFontService();
  readonly story = new StoryService();
}

export const services = new Services();

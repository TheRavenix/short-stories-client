import { AuthService } from "./auth";
import { ProFontService } from "./pro-font";
import { ProThemeService } from "./pro-theme";
import { UserService } from "./user";

class Service {
  readonly auth = new AuthService();
  readonly user = new UserService();
  readonly proTheme = new ProThemeService();
  readonly proFont = new ProFontService();
}

export const services = new Service();

import { AuthService } from "./auth";
import { ProThemeService } from "./pro-theme";
import { UserService } from "./user";

class Service {
  readonly auth = new AuthService();
  readonly user = new UserService();
  readonly proTheme = new ProThemeService();
}

const service = new Service();

export { service };

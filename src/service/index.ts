import { AuthService } from "./auth";
import { UserService } from "./user";

class Service {
  readonly auth = new AuthService();
  readonly user = new UserService();
}

const service = new Service();

export { service };

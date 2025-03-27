import { PlanType } from "@/components/Plans";
import { UserRoleType, UserType } from "@/stores/user";
import { axiosClient } from "@/utils/axios-client";

interface StatusResponse {
  plan: PlanType;
  role: UserRoleType;
}

class UserService {
  async getProfile(): Promise<UserType> {
    const response = await axiosClient.get("users/profile");
    return response.data;
  }

  async getStatus(): Promise<StatusResponse> {
    const response = await axiosClient.get("users/status");
    return response.data;
  }
}

export { UserService };

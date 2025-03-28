import { PlanType } from "@/components/Plans";
import { UserRoleType, UserType } from "@/stores/user";
import { MessageResponse } from "@/types/response";
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

  async editName(name: string): Promise<MessageResponse> {
    const response = await axiosClient.post("users/edit-name", { name });
    return response.data;
  }
}

export { UserService };

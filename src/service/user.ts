import { PlanType } from "@/components/Plans";
import { UserRoleType, UserType } from "@/stores/user";
import { MessageResponse } from "@/types/response";
import { axiosClient } from "@/utils/axios-client";

interface StatusResponse {
  plan: PlanType;
  role: UserRoleType;
}

interface EditEmailData {
  currentEmail: string;
  newEmail: string;
}

interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
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

  async editEmail(data: EditEmailData): Promise<MessageResponse> {
    const response = await axiosClient.post("users/edit-email", data);
    return response.data;
  }

  async changePassword(data: ChangePasswordData): Promise<MessageResponse> {
    const response = await axiosClient.post("users/change-password", data);
    return response.data;
  }

  async deleteOne(id: string): Promise<MessageResponse> {
    const response = await axiosClient.delete(`users/${id}`);
    return response.data;
  }
}

export { UserService, type EditEmailData, type ChangePasswordData };

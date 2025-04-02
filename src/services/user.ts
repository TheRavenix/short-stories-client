import { PlanType } from "@/components/Plans";
import { MessageResponse } from "@/types/response";
import { axiosClient } from "@/utils/axios-client";

type ProfileRoleType = "user" | "admin";

type ProfileType = {
  _id: string;
  name: string;
  email: string;
  plan: PlanType;
  role: ProfileRoleType;
  createdAt: number;
  updatedAt: number;
};

interface StatusResponse {
  plan: PlanType;
  role: ProfileRoleType;
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
  async getProfile(): Promise<ProfileType> {
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

  // TODO: This needs to be deleted
  async generatePdf(): Promise<unknown> {
    const response = await axiosClient.post("users/generate-pdf", {
      responseType: "blob",
    });
    return response.data;
  }

  async deleteOne(id: string): Promise<MessageResponse> {
    const response = await axiosClient.delete(`users/${id}`);
    return response.data;
  }
}

export {
  UserService,
  type ProfileRoleType,
  type ProfileType,
  type EditEmailData,
  type ChangePasswordData,
};

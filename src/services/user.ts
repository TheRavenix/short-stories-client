import { PlanType } from "@/components/Plans";
import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/constants/error";
import { MessageResponse } from "@/types/response";
import { axiosClient } from "@/utils/axios-client";
import { isNetworkError } from "@/utils/error";

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
    try {
      const response = await axiosClient.get("users/profile");
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to get profile"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async getStatus(): Promise<StatusResponse> {
    try {
      const response = await axiosClient.get("users/status");
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(error.response.data?.message || "Failed to get status");
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async editName(name: string): Promise<MessageResponse> {
    try {
      const response = await axiosClient.post("users/edit-name", { name });
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to edit your name"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async editEmail(data: EditEmailData): Promise<MessageResponse> {
    try {
      const response = await axiosClient.post("users/edit-email", data);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to edit your email"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async changePassword(data: ChangePasswordData): Promise<MessageResponse> {
    try {
      const response = await axiosClient.post("users/change-password", data);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to change your password"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async deleteOne(id: string): Promise<MessageResponse> {
    try {
      const response = await axiosClient.delete(`users/${id}`);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(
          error.response.data?.message || "Failed to delete your account"
        );
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }
}

export {
  UserService,
  type ProfileRoleType,
  type ProfileType,
  type EditEmailData,
  type ChangePasswordData,
};

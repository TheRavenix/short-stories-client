import { PlanType } from "@/components/Plans";
import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/constants";
import { MessageResponse } from "@/types";
import { axiosClient, isNetworkError } from "@/utils";

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

interface GetProfileResponse {
  success: boolean;
  data: ProfileType;
}

interface StatusType {
  plan: PlanType;
  role: ProfileRoleType;
}

interface GetStatusResponse {
  success: boolean;
  data: StatusType;
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
  async getProfile(): Promise<GetProfileResponse> {
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

  async getStatus(): Promise<GetStatusResponse> {
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
      const response = await axiosClient.patch("users/edit-name", { name });
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
      const response = await axiosClient.patch("users/edit-email", data);
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
      const response = await axiosClient.patch("users/change-password", data);
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

  async deleteUser(id: string): Promise<MessageResponse> {
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

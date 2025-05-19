import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/constants/error";
import { MessageResponse } from "@/types/response";
import { axiosClient } from "@/utils/axios-client";
import { isNetworkError } from "@/utils/error";

interface SignUpData {
  name?: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

class AuthService {
  async signUp(data: SignUpData): Promise<MessageResponse> {
    try {
      const response = await axiosClient.post("auth/sign-up", data);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(error.response.data?.message || "Sign up failed");
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async signIn(data: SignInData): Promise<MessageResponse> {
    try {
      const response = await axiosClient.post("auth/sign-in", data);
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(error.response.data?.message || "Sign in failed");
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }

  async signOut(): Promise<MessageResponse> {
    try {
      const response = await axiosClient.post("auth/sign-out");
      return response.data;
    } catch (error: any) {
      if (isNetworkError(error)) {
        throw new Error(NETWORK_ERROR);
      }
      if (error.response) {
        throw new Error(error.response.data?.message || "Sign out failed");
      }

      throw new Error(UNEXPECTED_ERROR);
    }
  }
}

export { AuthService, type SignUpData, type SignInData };

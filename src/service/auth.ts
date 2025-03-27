import { MessageResponse } from "@/types/response";
import { axiosClient } from "@/utils/axios-client";

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
    const response = await axiosClient.post("auth/sign-up", data);
    return response.data;
  }

  async signIn(data: SignInData): Promise<MessageResponse> {
    const response = await axiosClient.post("auth/sign-in", data);
    return response.data;
  }

  async signOut(): Promise<MessageResponse> {
    const response = await axiosClient.post("auth/sign-out");
    return response.data;
  }
}

export { AuthService, type SignUpData, type SignInData };

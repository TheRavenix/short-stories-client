import { axiosClient } from "@/utils/axios-client";

type ProThemeResponse = Record<string, Record<string, string>>;

class ProThemeService {
  async getAll(): Promise<ProThemeResponse> {
    const response = await axiosClient.get("pro-themes");
    return response.data;
  }
}

export { ProThemeService, type ProThemeResponse };

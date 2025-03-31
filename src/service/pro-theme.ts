import { axiosClient } from "@/utils/axios-client";

export class ProThemeService {
  async getAll(): Promise<Record<string, Record<string, string>>> {
    const response = await axiosClient.get("pro-themes");
    return response.data;
  }

  async getNames(): Promise<string[]> {
    const response = await axiosClient.get("pro-themes/names");
    return response.data;
  }
}

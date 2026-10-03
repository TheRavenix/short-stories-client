import { axiosClient } from "@/utils/axios-client";

export type ProThemeResponse = Record<string, Record<string, string>>

export async function getAllProThemes(): Promise<ProThemeResponse> {
  const response = await axiosClient.get('pro-themes')
  return response.data
}

import { axiosClient } from "@/utils/axios-client";

export type ProFontType = Record<string, Record<string, string>>

export type ProFontResponse = {
  src: string[]
  ui: ProFontType
  reading: ProFontType
}

export async function getAllProFonts(): Promise<ProFontResponse> {
  const response = await axiosClient.get('pro-fonts')
  return response.data
}

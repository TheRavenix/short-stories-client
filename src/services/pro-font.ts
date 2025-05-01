import { axiosClient } from "@/utils";

type ProFontType = Record<string, Record<string, string>>;

interface ProFontResponse {
  src: string[];
  ui: ProFontType;
  reading: ProFontType;
}

class ProFontService {
  async getAll(): Promise<ProFontResponse> {
    const response = await axiosClient.get("pro-fonts");
    return response.data;
  }
}

export { ProFontService, type ProFontType, type ProFontResponse };

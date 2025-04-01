"use client";

import { useFontStore } from "@/stores/font";

import { ProFontResponse } from "@/service/pro-font";
import { FontSelect } from "./FontSelect";
import { queryClient } from "../QueryProvider";

interface Props {}

const ReadingFontSelect: React.FC<Props> = () => {
  const readingFont = useFontStore((s) => s.readingFont);
  const setReadingFont = useFontStore((s) => s.setReadingFont);
  const proReadingFonts = queryClient.getQueryData<ProFontResponse>([
    "pro-fonts",
  ])?.reading;

  return (
    <FontSelect
      value={readingFont}
      onValueChange={setReadingFont}
      proSelectItems={proReadingFonts}
    />
  );
};

export { ReadingFontSelect };

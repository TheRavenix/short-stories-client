"use client";

import { SelectProps } from "@radix-ui/react-select";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { queryClient } from "@/components/QueryProvider";

import { useFontStore } from "@/stores/font";

import { removeHyphen } from "@/utils/remove-hyphen";
import { capitalize } from "@/utils/capitalize";
import { ProfileType } from "@/service/user";
import { ProFontResponse } from "@/service/pro-font";

interface Props extends SelectProps {}

const StoryContentFontSelect: React.FC<Props> = (props) => {
  const userPlan = queryClient.getQueryData<ProfileType>(["profile"])?.plan;
  const readingFont = useFontStore((s) => s.readingFont);
  const setReadingFont = useFontStore((s) => s.setReadingFont);
  const proReadingFonts = queryClient.getQueryData<ProFontResponse>([
    "pro-fonts",
  ])?.reading;

  return (
    <Select value={readingFont} onValueChange={setReadingFont}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel variant="primary">Free</SelectLabel>
          <SelectItem value="inter">Inter</SelectItem>
          <SelectItem value="source-sans3">Source Sans 3</SelectItem>
        </SelectGroup>
        {userPlan === "pro" && (
          <SelectGroup>
            <SelectLabel variant="primary">Pro</SelectLabel>
            {proReadingFonts &&
              Object.keys(proReadingFonts).map((name) => {
                return (
                  <SelectItem key={name} value={name}>
                    {removeHyphen(capitalize(name))}
                  </SelectItem>
                );
              })}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
};

export { StoryContentFontSelect };

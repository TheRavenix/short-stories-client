"use client";

import { SelectProps } from "@radix-ui/react-select";
import { useQuery } from "@tanstack/react-query";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

import { useFontStore } from "@/stores/font";
import { useProfile } from "@/hooks/profile";

import { removeHyphen, capitalize } from "@/utils/text";
import { services } from "@/services";

interface Props extends SelectProps {}

const StoryContentFontSelect: React.FC<Props> = (props) => {
  const readingFont = useFontStore((s) => s.readingFont);
  const setReadingFont = useFontStore((s) => s.setReadingFont);
  const { profile } = useProfile();
  const { data: proFonts } = useQuery({
    queryKey: ["pro-fonts"],
    queryFn: services.proFont.getAll,
  });

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
        {profile?.plan === "pro" && (
          <SelectGroup>
            <SelectLabel variant="primary">Pro</SelectLabel>
            {proFonts?.reading &&
              Object.keys(proFonts?.reading).map((name) => {
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

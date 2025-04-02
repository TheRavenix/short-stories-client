"use client";

import { useQuery } from "@tanstack/react-query";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

import { useThemeStore } from "@/stores/theme";
import { useProfile } from "@/hooks/profile";

import { removeHyphen } from "@/utils/remove-hyphen";
import { capitalize } from "@/utils/capitalize";
import { services } from "@/services";

interface Props {}

const ThemeSelect: React.FC<Props> = () => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const { profile } = useProfile();
  const { data: proThemes } = useQuery({
    queryKey: ["pro-themes"],
    queryFn: services.proTheme.getAll,
  });

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel variant="primary">Free</SelectLabel>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
        </SelectGroup>
        {profile?.plan === "pro" && (
          <SelectGroup>
            <SelectLabel variant="primary">Pro</SelectLabel>
            {proThemes &&
              Object.keys(proThemes).map((name) => {
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

export { ThemeSelect };

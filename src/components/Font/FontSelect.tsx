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
} from "../ui/Select";
import { queryClient } from "../QueryProvider";

import { ProFontType } from "@/service/pro-font";
import { removeHyphen } from "@/utils/remove-hyphen";
import { capitalize } from "@/utils/capitalize";
import { ProfileType } from "@/service/user";

interface Props extends SelectProps {
  proSelectItems: ProFontType | undefined;
}

const FontSelect: React.FC<Props> = (props) => {
  const userPlan = queryClient.getQueryData<ProfileType>(["profile"])?.plan;

  return (
    <Select {...props}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Free</SelectLabel>
          <SelectItem value="inter">Inter</SelectItem>
          <SelectItem value="source-sans3">Source Sans 3</SelectItem>
        </SelectGroup>
        {userPlan === "pro" && (
          <SelectGroup>
            <SelectLabel>Pro</SelectLabel>
            {props.proSelectItems &&
              Object.keys(props.proSelectItems).map((name) => {
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

export { FontSelect };

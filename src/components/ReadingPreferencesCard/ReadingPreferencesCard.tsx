import styles from "./ReadingPreferencesCard.module.scss";

import { SettingsCard, SettingsCardRow } from "../SettingsCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import { Input } from "../ui/Input";

interface Props {}

const ReadingPreferencesCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Reading Preferences"
      description="Here you can change your reading preferences"
    >
      <SettingsCardRow label="Reading Mode">
        <Select defaultValue="light">
          <SelectTrigger size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SettingsCardRow>
      <SettingsCardRow label="Reading Font">
        <Select defaultValue="source-sans3">
          <SelectTrigger size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="source-sans3">Source Sans 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SettingsCardRow>
      <SettingsCardRow label="Text Size Adjustments">
        <Input label="Size" size="sm" type="number" />
      </SettingsCardRow>
    </SettingsCard>
  );
};

export { ReadingPreferencesCard };

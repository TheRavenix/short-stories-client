import styles from "./ReadingPreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../SettingsCard";
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
      <SettingsCardItem label="Reading mode">
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
      </SettingsCardItem>
      <SettingsCardItem label="Reading font">
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
      </SettingsCardItem>
      <SettingsCardItem label="Text size adjustments">
        <Input label="Size" size="sm" type="number" />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { ReadingPreferencesCard };

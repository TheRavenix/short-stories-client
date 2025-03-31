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
import { ReadingFontSelect, UiFontSelect } from "../Font";

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
      <SettingsCardItem label="User interface font">
        <UiFontSelect />
      </SettingsCardItem>
      <SettingsCardItem label="Reading font">
        <ReadingFontSelect />
      </SettingsCardItem>
      <SettingsCardItem label="Text size adjustments">
        <Input label="Size" size="sm" type="number" />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { ReadingPreferencesCard };

import styles from "./AccountSettingsCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { EditName } from "./EditName";
import { EditEmail } from "./EditEmail";
import { ChangePassword } from "./ChangePassword";
import { DeleteAccount } from "./DeleteAccount";
import { SignOut } from "./SignOut";

interface Props {}

const AccountSettingsCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Account Settings"
      description="Here you can change your account settings"
    >
      <SettingsCardItem label="Edit your name">
        <EditName />
      </SettingsCardItem>
      <SettingsCardItem label="Edit your email">
        <EditEmail />
      </SettingsCardItem>
      <SettingsCardItem label="Change your password">
        <ChangePassword />
      </SettingsCardItem>
      <SettingsCardItem label="Sign out from current session">
        <SignOut />
      </SettingsCardItem>
      <SettingsCardItem label="Delete your account">
        <DeleteAccount />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { AccountSettingsCard };

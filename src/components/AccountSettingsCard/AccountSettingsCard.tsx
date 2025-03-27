import styles from "./AccountSettingsCard.module.scss";

import { SettingsCard, SettingsCardRow } from "../SettingsCard";
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
      <SettingsCardRow label="Edit your Name">
        <EditName />
      </SettingsCardRow>
      <SettingsCardRow label="Edit your Email">
        <EditEmail />
      </SettingsCardRow>
      <SettingsCardRow label="Change your Password">
        <ChangePassword />
      </SettingsCardRow>
      <SettingsCardRow label="Sign out from current Session">
        <SignOut />
      </SettingsCardRow>
      <SettingsCardRow label="Delete your Account">
        <DeleteAccount />
      </SettingsCardRow>
    </SettingsCard>
  );
};

export { AccountSettingsCard };

import styles from "./SettingsCard.module.scss";

import { P } from "../ui/Typography";

interface Props {
  label: string;
  children: React.ReactNode;
}

const SettingsCardRow: React.FC<Props> = ({ label, children }) => {
  return (
    <div className={styles.cardRow}>
      <P>{label}</P>
      <div className={styles.cardRowRightSection}>{children}</div>
    </div>
  );
};

export { SettingsCardRow };

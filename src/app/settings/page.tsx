import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { ProtectedSettings } from "@/components/protected-routes";
import {
  SitePreferencesCard,
  ReadingPreferencesCard,
  AccountSettingsCard,
} from "@/components/cards";

export default function Settings() {
  return (
    <ProtectedSettings>
      <main className={styles.main}>
        <CompactContainer withPaddingBlock withContentSpacing>
          <H1 className={styles.headline}>Settings</H1>
          <div className={styles.sections}>
            <SitePreferencesCard />
            <ReadingPreferencesCard />
            <AccountSettingsCard />
          </div>
        </CompactContainer>
      </main>
    </ProtectedSettings>
  );
}

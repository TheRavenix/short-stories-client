import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { AccountSettingsCard } from "@/components/AccountSettingsCard";
import { ReadingPreferencesCard } from "@/components/ReadingPreferencesCard";
import { SubscriptionSettingsCard } from "@/components/SubscriptionSettingsCard";
import { ProtectedSettings } from "@/components/ProtectedRoutes";

export default function Settings() {
  return (
    <ProtectedSettings>
      <main className={styles.main}>
        <CompactContainer withPaddingBlock withContentSpacing>
          <H1 className={styles.headline}>Settings</H1>
          <div className={styles.sections}>
            <AccountSettingsCard />
            <ReadingPreferencesCard />
            <SubscriptionSettingsCard />
          </div>
        </CompactContainer>
      </main>
    </ProtectedSettings>
  );
}

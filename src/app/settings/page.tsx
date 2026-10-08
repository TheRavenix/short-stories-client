import { SitePreferencesCard } from "@/components/cards/SitePreferencesCard";
import styles from "./page.module.css";

import { CompactContainer } from "@/components/ui/Container/CompactContainer";
import { H1 } from "@/components/ui/Typography";
import { ReadingPreferencesCard } from "@/components/cards/ReadingPreferencesCard";
import { AccountSettingsCard } from "@/components/cards/AccountSettingsCard";

export default function Settings() {
  return (
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
  )
}

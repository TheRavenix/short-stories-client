import styles from "./page.module.css";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container/CompactContainer";
import { AdminPageGuard } from "@/components/guards/AdminPageGuard";

export default function Dashboard() {
  return (
    <>
      <AdminPageGuard />
      <main className={styles.main}>
        <CompactContainer withPaddingBlock>
          <H1 className={styles.headline}>Dashboard</H1>
          <p>Hello Dashboard</p>
        </CompactContainer>
      </main>
    </>
  )
}

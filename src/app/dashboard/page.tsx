import styles from "./page.module.scss";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container";
import { AdminPageGuard } from "@/components/guards";

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

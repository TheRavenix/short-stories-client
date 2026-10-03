import styles from "./NewsletterSubSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { NewsletterSubForm } from "@/components/forms";

export function NewsletterSubSection() {
  return (
    <div className={styles.newsletterSub}>
      <H1 transform='capitalize' className={styles.headline}>
        Stay updated
      </H1>
      <NewsletterSubForm />
    </div>
  )
}

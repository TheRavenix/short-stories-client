import { CircleAlertIcon } from "lucide-react";
import Link from "next/link";

import styles from "./not-found.module.scss";

import { EmptyState } from "@/components/EmptyState";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <div className={styles.content}>
          <EmptyState
            icon={<CircleAlertIcon />}
            message="Oops! This page doesn’t exist… or maybe it’s hiding from you!"
          />
          <Link href="/">
            <Button>Back Home</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}

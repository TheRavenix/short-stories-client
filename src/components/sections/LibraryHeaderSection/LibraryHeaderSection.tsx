"use client";

import Link from "next/link";

import styles from "./LibraryHeaderSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

import { useProfile } from "@/hooks/profile";

interface Props {}

const LibraryHeaderSection: React.FC<Props> = () => {
  const { isLoading, profile } = useProfile();

  if (isLoading || profile?.role !== "admin")
    return <H1 className={styles.headlineCentered}>Library</H1>;

  return (
    <div className={styles.header}>
      <H1 className={styles.headline}>Library</H1>
      <Link href="/s/create">
        <Button size="sm">New story</Button>
      </Link>
    </div>
  );
};

export { LibraryHeaderSection };

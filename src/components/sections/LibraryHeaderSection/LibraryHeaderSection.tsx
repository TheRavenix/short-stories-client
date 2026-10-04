"use client";

import Link from "next/link";

import styles from "./LibraryHeaderSection.module.css";

import { H1 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { useProfile } from "@/hooks/profile";

export function LibraryHeaderSection() {
  const { isLoading, profile } = useProfile()

  if (isLoading || profile?.role !== 'admin') {
    return (
      <H1 className={styles.headlineCentered}>Library</H1>
    )
  }

  return (
    <div className={styles.header}>
      <H1 className={styles.headline}>Library</H1>
      <Link href='/s/create'>
        <Button size='sm'>New story</Button>
      </Link>
    </div>
  )
}

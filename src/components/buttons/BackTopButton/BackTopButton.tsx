"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import styles from "./BackTopButton.module.css";

import { Button } from "@/components/ui/Button";

type Props = {
  maxScrollY?: number
}

export function BackTopButton({ maxScrollY = 2500 }: Props) {
  const [visible, setVisible] = useState(false)
  const scrollTimeout = useRef<NodeJS.Timeout>(null)
  const scrollTimeoutMS = 300

  const handleClick = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (scrollTimeout.current !== null) {
      clearTimeout(scrollTimeout.current)
    }

    scrollTimeout.current = setTimeout(() => {
      if (window.scrollY >= maxScrollY) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }, scrollTimeoutMS)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div className={styles.container}>
      <Button variant='inverse' size='icon' onClick={handleClick}>
        <ArrowUpIcon size={20} />
      </Button>
    </div>
  )
}

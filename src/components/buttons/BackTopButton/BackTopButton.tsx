"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import styles from "./BackTopButton.module.scss";

import { Button } from "@/components/ui/Button";

interface Props {
  maxScrollY?: number;
}

const BackTopButton: React.FC<Props> = ({ maxScrollY = 2500 }) => {
  const [visible, setVisible] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>(null);
  const scrollTimeoutMS = 300;

  function handleClick() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  function handleScroll() {
    if (scrollTimeout.current !== null) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      if (window.scrollY >= maxScrollY) {
        setVisible(true);
      } else setVisible(false);
    }, scrollTimeoutMS);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.container}>
      <Button variant="inverse" size="icon" onClick={handleClick}>
        <ArrowUpIcon size={20} />
      </Button>
    </div>
  );
};

export { BackTopButton };

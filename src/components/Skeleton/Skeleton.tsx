"use client";

import React from "react";

import styles from "./Skeleton.module.scss";

type SkeletonType = "card" | "text" | "image" | "circle" | "button";

interface SkeletonProps {
  type?: SkeletonType;
  count?: number;
  width?: string | number;
  height?: string | number;
  className?: string;
  rounded?: boolean;
}

const getDefaultHeight = (type: SkeletonType) => {
  switch (type) {
    case "card":
      return "200px";
    case "image":
      return "150px";
    case "text":
      return "1em";
    case "circle":
      return "40px";
    case "button":
      return "36px";
    default:
      return "1em";
  }
};

const Skeleton: React.FC<SkeletonProps> = ({
  type = "text",
  count = 1,
  width = "100%",
  height,
  className = "",
  rounded = false,
}) => {
  const style = {
    width,
    height: height || getDefaultHeight(type),
    borderRadius: rounded ? "50%" : undefined,
  };

  const skeletons = Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      className={`${styles.skeleton} ${styles[type]} ${className}`}
      style={style}
      aria-label="Loading..."
    />
  ));

  return <>{skeletons}</>;
};

export { Skeleton };

'use client'

import React from 'react'

import styles from './Skeleton.module.css'

type SkeletonType = 'card' | 'text' | 'image' | 'circle' | 'button'

type Props = {
  type?: SkeletonType
  count?: number
  width?: string | number
  height?: string | number
  className?: string
  rounded?: boolean
}

function getDefaultHeight(type: SkeletonType) {
  switch (type) {
    case 'card':
      return '200px'
    case 'image':
      return '150px'
    case 'text':
      return '1em'
    case 'circle':
      return '40px'
    case 'button':
      return '36px'
    default:
      return '1em'
  }
}

export function Skeleton({
  type = 'text',
  count = 1,
  width = '100%',
  height,
  className,
  rounded = false
}: Props) {
  const style = {
    width,
    height: height || getDefaultHeight(type),
    borderRadius: rounded ? '50%' : undefined
  }

  const skeletons = Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      className={`${styles.skeleton} ${styles[type]} ${className}`}
      style={style}
      aria-label='Loading...'
    />
  ))

  return <>{skeletons}</>
}

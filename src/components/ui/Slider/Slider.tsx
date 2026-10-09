'use client'

import { ComponentProps } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'

import styles from './Slider.module.css'

type SliderProps = ComponentProps<typeof SliderPrimitive.Root>

export function Slider({ className, ...rest }: SliderProps) {
  return (
    <SliderPrimitive.Root
      className={clsx(styles.sliderRoot, className)}
      {...rest}
    />
  )
}

type SliderTrackProps = ComponentProps<typeof SliderPrimitive.Track>

export function SliderTrack({ className, ...rest }: SliderTrackProps) {
  return (
    <SliderPrimitive.Track
      className={clsx(styles.sliderTrack, className)}
      {...rest}
    />
  )
}

type SliderRangeProps = ComponentProps<typeof SliderPrimitive.Range>

export function SliderRange({ className, ...rest }: SliderRangeProps) {
  return (
    <SliderPrimitive.Range
      className={clsx(styles.sliderRange, className)}
      {...rest}
    />
  )
}

type SliderThumbProps = ComponentProps<typeof SliderPrimitive.Thumb>

export function SliderThumb({ className, ...rest }: SliderThumbProps) {
  return (
    <SliderPrimitive.Thumb
      className={clsx(styles.sliderThumb, className)}
      {...rest}
    />
  )
}

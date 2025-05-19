"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import clsx from "clsx";

import styles from "./Toast.module.scss";

import { ToastVariant } from "@/stores/toast";

const ToastProvider = ToastPrimitive.Provider;
ToastProvider.displayName = ToastPrimitive.Provider.displayName;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={clsx(styles.toastViewport, className)}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={clsx(styles.toastRoot, className)}
    {...props}
  />
));
ToastRoot.displayName = ToastPrimitive.Root.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={clsx(styles.toastTitle, className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

interface ToastDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description> {
  variant?: ToastVariant;
}

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  ToastDescriptionProps
>(({ className, variant = "default", ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={clsx(styles.toastDescription, styles[variant], className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={clsx(styles.toastAction, className)}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitive.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={clsx(styles.toastClose, className)}
    {...props}
  />
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

export {
  ToastProvider as Toast,
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
};

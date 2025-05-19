"use client";

import { XIcon } from "lucide-react";
import { PropsWithChildren } from "react";

import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/Toast";
import { Button } from "../ui/Button";

import { useToastStore } from "@/stores/toast";

interface Props extends PropsWithChildren {}

const ToastProvider: React.FC<Props> = ({ children }) => {
  const toasts = useToastStore((s) => s.toasts);
  const removeToast = useToastStore((s) => s.removeToast);

  return (
    <Toast>
      {children}
      {toasts.map((toast) => (
        <ToastRoot
          key={toast.id}
          duration={toast.duration ?? 3000}
          onOpenChange={(open) => {
            if (!open) removeToast(toast);
          }}
        >
          <ToastTitle>{toast.title}</ToastTitle>
          {toast.description ? (
            <ToastDescription variant={toast.variant}>
              {toast.description}
            </ToastDescription>
          ) : null}
          {toast.action ? (
            <ToastAction altText="Action" asChild>
              {toast.action}
            </ToastAction>
          ) : (
            <ToastClose asChild>
              <Button size="icon" variant="ghost" aria-label="Close">
                <XIcon size={20} />
              </Button>
            </ToastClose>
          )}
        </ToastRoot>
      ))}
      <ToastViewport />
    </Toast>
  );
};

export { ToastProvider };

"use client";

import { create } from "zustand";

type ToastVariant = "default" | "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: React.ReactNode;
}

interface StoreState {
  toasts: Toast[];
  addToast(toast: Omit<Toast, "id"> & { id?: string }): void;
  removeToast(toast: Pick<Toast, "id">): void;
}

const useToastStore = create<StoreState>((set) => ({
  toasts: [],

  addToast(toast) {
    const id = toast.id || Math.random().toString(36).substring(2, 9);

    set((state) => {
      if (state.toasts.length >= 3) {
        return {
          ...state,
          toasts: [{ ...toast, id }],
        };
      }

      return {
        ...state,
        toasts: [...state.toasts, { ...toast, id }],
      };
    });
  },
  removeToast(toast) {
    set((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== toast.id),
    }));
  },
}));

export { useToastStore, type ToastVariant };

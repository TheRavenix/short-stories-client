"use client";

import { create } from "zustand";

interface StoreState {
  isAuthenticated: boolean;

  setIsAuthenticated(isAuth: boolean): void;
}

export const useAuthStore = create<StoreState>((set) => ({
  isAuthenticated: false,

  setIsAuthenticated(isAuth) {
    set((state) => ({ ...state, isAuthenticated: isAuth }));
  },
}));

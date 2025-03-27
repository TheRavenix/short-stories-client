"use client";

import { create } from "zustand";

import { PlanType } from "@/components/Plans";

type UserRoleType = "user" | "admin";

type UserType = {
  _id: string;
  name: string;
  email: string;
  plan: PlanType;
  role: UserRoleType;
  createdAt: number;
  updatedAt: number;
};

interface StoreState extends UserType {
  setFromProfile(user: UserType): void;
  clearUser(): void;
}

const useUserStore = create<StoreState>((set) => ({
  _id: "",
  name: "",
  email: "",
  plan: "free",
  role: "user",
  createdAt: 0,
  updatedAt: 0,

  setFromProfile(user) {
    set((state) => ({ ...state, ...user }));
  },
  clearUser() {
    set((state) => ({
      ...state,
      _id: "",
      name: "",
      email: "",
      plan: "free",
      role: "user",
      createdAt: 0,
      updatedAt: 0,
    }));
  },
}));

export { useUserStore, type UserType, type UserRoleType };

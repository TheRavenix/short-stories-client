"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import styles from "./ChangePassword.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { useToastStore } from "@/stores";

import { ChangePasswordData } from "@/services/user";
import { services } from "@/services";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePasswordContent: React.FC<Props> = ({ setOpen }) => {
  const [formData, setFormData] = useState<ChangePasswordData>({
    currentPassword: "",
    newPassword: "",
  });
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationFn: services.user.changePassword,
    onSuccess(data) {
      addToast({
        title: "Change password",
        description: data.message,
      });
      setFormData({ currentPassword: "", newPassword: "" });
    },
    onError(error) {
      addToast({
        title: "Error change password",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(formData);
  }

  return (
    <form className={styles.form} onSubmit={handleChange}>
      <Input
        type="password"
        label="Current Password"
        required
        value={formData.currentPassword}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            currentPassword: e.target.value,
          }))
        }
      />
      <Input
        type="password"
        label="New Password"
        required
        value={formData.newPassword}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, newPassword: e.target.value }))
        }
      />
      <Button type="submit" disabled={mutation.isPending}>
        Save
      </Button>
    </form>
  );
};

export { ChangePasswordContent };

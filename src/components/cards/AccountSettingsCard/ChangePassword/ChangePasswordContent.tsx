"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { XIcon } from "lucide-react";

import styles from "./ChangePassword.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/Toast";

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

  const mutation = useMutation({
    mutationFn: services.user.changePassword,
    onSuccess() {
      setFormData({ currentPassword: "", newPassword: "" });
    },
  });

  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(formData);
  }

  return (
    <>
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
      {mutation.isError && (
        <ToastRoot>
          <ToastTitle>Error change password</ToastTitle>
          <ToastDescription variant="error">
            {mutation.error?.message}
          </ToastDescription>
          <ToastAction altText="Action" asChild>
            <Button size="icon" variant="ghost">
              <XIcon size={20} />
            </Button>
          </ToastAction>
        </ToastRoot>
      )}
      {mutation.isSuccess && (
        <ToastRoot>
          <ToastTitle>Change password</ToastTitle>
          <ToastDescription>{mutation.data.message}</ToastDescription>
          <ToastAction altText="Action" asChild>
            <Button size="icon" variant="ghost">
              <XIcon size={20} />
            </Button>
          </ToastAction>
        </ToastRoot>
      )}
    </>
  );
};

export { ChangePasswordContent };

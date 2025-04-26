"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { XIcon } from "lucide-react";

import styles from "./EditEmail.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/Toast";

import { useProfile } from "@/hooks";

import { EditEmailData } from "@/services/user";
import { services } from "@/services";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditEmailContent: React.FC<Props> = ({ setOpen }) => {
  const [formData, setFormData] = useState<EditEmailData>({
    currentEmail: "",
    newEmail: "",
  });
  const { refetch } = useProfile();

  const mutation = useMutation({
    mutationFn: services.user.editEmail,
    onSuccess(data, variables) {
      setFormData({ currentEmail: "", newEmail: "" });
      refetch();
    },
  });

  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(formData);
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleEdit}>
        <Input
          type="email"
          label="Current Email"
          required
          value={formData.currentEmail}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, currentEmail: e.target.value }))
          }
        />
        <Input
          type="email"
          label="New Email"
          required
          value={formData.newEmail}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, newEmail: e.target.value }))
          }
        />
        <Button type="submit" disabled={mutation.isPending}>
          Save
        </Button>
      </form>
      {mutation.isError && (
        <ToastRoot>
          <ToastTitle>Error edit email</ToastTitle>
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
          <ToastTitle>Edit email</ToastTitle>
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

export { EditEmailContent };

"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { XIcon } from "lucide-react";

import styles from "./EditName.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/Toast";

import { useProfile } from "@/hooks/profile";

import { services } from "@/services";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditNameContent: React.FC<Props> = ({ setOpen }) => {
  const [name, setName] = useState("");
  const { refetch } = useProfile();

  const mutation = useMutation({
    mutationFn: services.user.editName,
    onSuccess(data, variables) {
      refetch();
    },
  });

  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(name);
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleEdit}>
        <Input
          label="Your New Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" disabled={mutation.isPending}>
          Save
        </Button>
      </form>
      {mutation.isError && (
        <ToastRoot>
          <ToastTitle>Error edit name</ToastTitle>
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
          <ToastTitle>Edit name</ToastTitle>
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

export { EditNameContent };

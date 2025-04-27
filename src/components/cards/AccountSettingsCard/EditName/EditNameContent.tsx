"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import styles from "./EditName.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { useProfile } from "@/hooks";
import { useToastStore } from "@/stores";

import { services } from "@/services";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditNameContent: React.FC<Props> = ({ setOpen }) => {
  const [name, setName] = useState("");
  const { refetch } = useProfile();
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationFn: services.user.editName,
    onSuccess(data) {
      addToast({
        title: "Edit name",
        description: data.message,
      });
      setOpen(false);
      refetch();
    },
    onError(error) {
      addToast({
        title: "Error edit name",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(name);
  }

  return (
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
  );
};

export { EditNameContent };

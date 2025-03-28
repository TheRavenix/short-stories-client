"use client";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import styles from "./EditName.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { service } from "@/service";
import { useState } from "react";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditNameContent: React.FC<Props> = ({ setOpen }) => {
  const [name, setName] = useState("");

  const mutation = useMutation({
    mutationFn: service.user.editName,
    onSuccess(data, variables) {
      console.log(data.message);
      setOpen(false);
    },
    onError(error: AxiosError<{ message: string }>) {
      alert(error.response?.data.message);
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

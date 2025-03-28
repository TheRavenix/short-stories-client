"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import styles from "./EditEmail.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { service } from "@/service";
import { EditEmailData } from "@/service/user";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditEmailContent: React.FC<Props> = ({ setOpen }) => {
  const [formData, setFormData] = useState<EditEmailData>({
    currentEmail: "",
    newEmail: "",
  });

  const mutation = useMutation({
    mutationFn: service.user.editEmail,
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

    mutation.mutate(formData);
  }

  return (
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
  );
};

export { EditEmailContent };

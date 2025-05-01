"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import styles from "./EditEmail.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ActionSlot } from "@/components/ActionSlot";
import { Form } from "@/components/Form";

import { useProfile } from "@/hooks";
import { useToastStore } from "@/stores";

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
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationFn: services.user.editEmail,
    onSuccess(data) {
      addToast({
        title: "Edit email",
        description: data.message,
      });
      setOpen(false);
      refetch();
    },
    onError(error) {
      addToast({
        title: "Error edit email",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    mutation.mutate(formData);
  }

  return (
    <Form spacing="md" onSubmit={handleEdit}>
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
      <ActionSlot>
        <Button type="submit" disabled={mutation.isPending}>
          Save
        </Button>
      </ActionSlot>
    </Form>
  );
};

export { EditEmailContent };

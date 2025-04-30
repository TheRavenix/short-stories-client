"use client";

import styles from "./CreateStoryForm.module.scss";

import { Input, Textarea } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

import { useProfile } from "@/hooks";
import { Skeleton } from "@/components/Skeleton";

interface Props {}

const CreateStoryForm: React.FC<Props> = () => {
  const { isLoading, profile } = useProfile();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  if (isLoading || profile?.role !== "admin") {
    return <Skeleton type="card" />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input label="Name" required />
      <Input label="Description" required />
      <Textarea label="About" />
      <Textarea label="Preview" />
      <Textarea label="Content" />
      <Select defaultValue="adventure">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="adventure">Adventure</SelectItem>
            <SelectItem value="mystery">Mystery</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select defaultValue="free">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input label="Cover Image" type="file" required />
      <div className={styles.createStoryContainer}>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
};

export { CreateStoryForm };

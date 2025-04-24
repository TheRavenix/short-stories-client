import styles from "./SettingsCard.module.scss";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const SettingsCard: React.FC<Props> = ({ title, description, children }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={styles.cardContent}>{children}</CardContent>
    </Card>
  );
};

export { SettingsCard };

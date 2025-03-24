import { InfoIcon } from "lucide-react";

import { EmptyState } from "../EmptyState";
import { Show } from "../Show";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";

import styles from "./Story.module.scss";

interface Props {
  name: string;
  about: string[];
}

const StoryAboutCard: React.FC<Props> = ({ name, about }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle size="xl">{name}'s about</CardTitle>
      </CardHeader>
      <CardContent>
        <Show
          when={about.length > 0}
          fallback={
            <EmptyState
              icon={<InfoIcon />}
              message="The author hasn't shared more details yet, but the story awaits!"
            />
          }
        >
          <div className={styles.aboutCardDescriptions}>
            {about.map((item, i) => (
              <CardDescription key={i}>{item}</CardDescription>
            ))}
          </div>
        </Show>
      </CardContent>
    </Card>
  );
};

export { StoryAboutCard };

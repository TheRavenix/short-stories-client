import { InfoIcon } from "lucide-react";

import { EmptyState } from "../EmptyState";
import { Show } from "../Show";
import { Card, CardContent, CardHeader } from "../ui/Card";

import styles from "./Story.module.scss";
import { H3, P } from "../ui/Typography";

interface Props {
  name: string;
  about: string[];
}

const StoryAboutCard: React.FC<Props> = ({ name, about }) => {
  return (
    <Card>
      <CardHeader>
        <P size="xl" weight="semi-bold" transform="capitalize">
          {name}'s about
        </P>
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
              <P key={i}>{item}</P>
            ))}
          </div>
        </Show>
      </CardContent>
    </Card>
  );
};

export { StoryAboutCard };

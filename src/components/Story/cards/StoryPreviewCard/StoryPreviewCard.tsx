import { EyeIcon } from "lucide-react";

import styles from "./StoryPreviewCard.module.scss";

import { EmptyState } from "@/components/EmptyState";
import { Show } from "@/components/Show";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { P } from "@/components/ui/Typography";
import { StoryContent } from "../../StoryContent";

interface Props {
  id: string;
  name: string;
  preview: string[];
}

const StoryPreviewCard: React.FC<Props> = ({ id, name, preview }) => {
  return (
    <Card>
      <CardHeader>
        <P
          size="xl"
          weight="semi-bold"
          transform="capitalize"
          className={styles.uiFont}
        >
          {name}'s preview
        </P>
      </CardHeader>
      <CardContent>
        <Show
          when={["zzzzz"].length > 0}
          fallback={
            <EmptyState
              icon={<EyeIcon />}
              message="No preview available. Start reading to explore the story!"
            />
          }
        >
          <StoryContent
            content={["zzzzz", "qqqqqqqq", "qdddddd"]}
            showItemHeaderTools={false}
          />
        </Show>
      </CardContent>
    </Card>
  );
};

export { StoryPreviewCard };

import { EyeIcon } from "lucide-react";

import styles from "./Story.module.scss";

import { EmptyState } from "../EmptyState";
import { Show } from "../Show";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { StoryContent } from "./StoryContent";

interface Props {
  id: string;
  name: string;
  preview: string[];
}

const StoryPreviewCard: React.FC<Props> = ({ id, name, preview }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle size="xl">{name}'s preview</CardTitle>
      </CardHeader>
      <CardContent>
        <Show
          when={preview.length > 0}
          fallback={
            <EmptyState
              icon={<EyeIcon />}
              message="No preview available. Start reading to explore the story!"
            />
          }
        >
          <StoryContent storyId={id} content={preview} />
        </Show>
      </CardContent>
    </Card>
  );
};

export { StoryPreviewCard };

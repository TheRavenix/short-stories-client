import {
  StoryContentFontSelect,
  StoryContentFontSizeSelect,
} from "../StoryContent";
import { StoryLayoutSelect } from "../StoryLayout";

import styles from "./StoryReadTools.module.scss";

interface Props {}

const StoryReadTools: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <StoryLayoutSelect />
      <StoryContentFontSelect />
      <StoryContentFontSizeSelect />
    </div>
  );
};

export { StoryReadTools };

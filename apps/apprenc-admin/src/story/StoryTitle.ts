import { Story as TStory } from "../api/story/Story";

export const STORY_TITLE_FIELD = "mediaUrl";

export const StoryTitle = (record: TStory): string => {
  return record.mediaUrl?.toString() || String(record.id);
};

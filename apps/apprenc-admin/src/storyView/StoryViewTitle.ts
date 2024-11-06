import { StoryView as TStoryView } from "../api/storyView/StoryView";

export const STORYVIEW_TITLE_FIELD = "viewerId";

export const StoryViewTitle = (record: TStoryView): string => {
  return record.viewerId?.toString() || String(record.id);
};

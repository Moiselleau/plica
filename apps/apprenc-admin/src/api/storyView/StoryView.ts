import { Story } from "../story/Story";

export type StoryView = {
  id: string;
  story?: Story;
  viewedAt: Date;
  viewerId: string;
};

import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type StoryViewUpdateInput = {
  story?: StoryWhereUniqueInput;
  viewerId?: string;
};

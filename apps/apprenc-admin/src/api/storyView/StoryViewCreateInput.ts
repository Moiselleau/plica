import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type StoryViewCreateInput = {
  story: StoryWhereUniqueInput;
  viewerId: string;
};

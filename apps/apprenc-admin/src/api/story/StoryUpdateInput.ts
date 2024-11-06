import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StoryViewUpdateManyWithoutStoriesInput } from "./StoryViewUpdateManyWithoutStoriesInput";

export type StoryUpdateInput = {
  expiresAt?: Date;
  mediaUrl?: string;
  type?: "IMAGE" | "VIDEO" | "AUDIO";
  user?: UserWhereUniqueInput;
  views?: StoryViewUpdateManyWithoutStoriesInput;
};

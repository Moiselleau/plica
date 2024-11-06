import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StoryViewCreateNestedManyWithoutStoriesInput } from "./StoryViewCreateNestedManyWithoutStoriesInput";

export type StoryCreateInput = {
  expiresAt: Date;
  mediaUrl: string;
  type: "IMAGE" | "VIDEO" | "AUDIO";
  user: UserWhereUniqueInput;
  views?: StoryViewCreateNestedManyWithoutStoriesInput;
};

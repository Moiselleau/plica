import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StoryViewListRelationFilter } from "../storyView/StoryViewListRelationFilter";

export type StoryWhereInput = {
  createdAt?: DateTimeFilter;
  expiresAt?: DateTimeFilter;
  id?: StringFilter;
  mediaUrl?: StringFilter;
  type?: "IMAGE" | "VIDEO" | "AUDIO";
  user?: UserWhereUniqueInput;
  views?: StoryViewListRelationFilter;
};

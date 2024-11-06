import { StringFilter } from "../../util/StringFilter";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type StoryViewWhereInput = {
  id?: StringFilter;
  story?: StoryWhereUniqueInput;
  viewedAt?: DateTimeFilter;
  viewerId?: StringFilter;
};

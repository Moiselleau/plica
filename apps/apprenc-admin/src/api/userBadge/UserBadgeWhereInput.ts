import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserBadgeWhereInput = {
  earnedAt?: DateTimeFilter;
  id?: StringFilter;
  typeField?: StringFilter;
  user?: UserWhereUniqueInput;
};

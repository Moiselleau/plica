import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupMemberWhereInput = {
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  joinedAt?: DateTimeFilter;
  role?: StringFilter;
  user?: UserWhereUniqueInput;
};

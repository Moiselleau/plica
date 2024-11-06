import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterestListRelationFilter } from "../interest/InterestListRelationFilter";
import { GroupMemberListRelationFilter } from "../groupMember/GroupMemberListRelationFilter";

export type GroupWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  interests?: InterestListRelationFilter;
  members?: GroupMemberListRelationFilter;
  name?: StringFilter;
};

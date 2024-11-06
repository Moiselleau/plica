import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  reason?: StringFilter;
  reportedUser?: UserWhereUniqueInput;
  status?: StringFilter;
};

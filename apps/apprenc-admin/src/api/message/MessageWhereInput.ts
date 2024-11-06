import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  mediaUrl?: StringNullableFilter;
  readAt?: DateTimeNullableFilter;
  receiver?: UserWhereUniqueInput;
  sender?: UserWhereUniqueInput;
};

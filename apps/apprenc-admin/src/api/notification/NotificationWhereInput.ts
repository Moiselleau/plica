import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  read?: BooleanFilter;
  typeField?: StringFilter;
  user?: UserWhereUniqueInput;
};

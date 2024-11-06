import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeFilter;
  status?: "ACTIVE" | "CANCELLED" | "EXPIRED";
  type?: "FREE" | "PREMIUM" | "VIP";
  user?: UserWhereUniqueInput;
};

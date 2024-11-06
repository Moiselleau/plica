import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  receiver?: UserWhereUniqueInput;
  sender?: UserWhereUniqueInput;
  status?: "PENDING" | "ACCEPTED" | "REJECTED";
};

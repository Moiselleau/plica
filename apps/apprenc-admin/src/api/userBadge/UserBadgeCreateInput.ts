import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserBadgeCreateInput = {
  typeField: string;
  user: UserWhereUniqueInput;
};

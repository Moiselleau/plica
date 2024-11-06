import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupMemberUpdateInput = {
  group?: GroupWhereUniqueInput;
  role?: string;
  user?: UserWhereUniqueInput;
};

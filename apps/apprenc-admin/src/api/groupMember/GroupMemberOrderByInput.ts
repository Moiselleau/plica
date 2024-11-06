import { SortOrder } from "../../util/SortOrder";

export type GroupMemberOrderByInput = {
  groupId?: SortOrder;
  id?: SortOrder;
  joinedAt?: SortOrder;
  role?: SortOrder;
  userId?: SortOrder;
};

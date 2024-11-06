import { GroupMemberWhereInput } from "./GroupMemberWhereInput";
import { GroupMemberOrderByInput } from "./GroupMemberOrderByInput";

export type GroupMemberFindManyArgs = {
  where?: GroupMemberWhereInput;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: number;
  take?: number;
};

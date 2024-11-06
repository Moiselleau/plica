import { GroupMember as TGroupMember } from "../api/groupMember/GroupMember";

export const GROUPMEMBER_TITLE_FIELD = "role";

export const GroupMemberTitle = (record: TGroupMember): string => {
  return record.role?.toString() || String(record.id);
};

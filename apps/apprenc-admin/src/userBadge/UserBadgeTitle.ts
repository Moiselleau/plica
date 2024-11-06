import { UserBadge as TUserBadge } from "../api/userBadge/UserBadge";

export const USERBADGE_TITLE_FIELD = "typeField";

export const UserBadgeTitle = (record: TUserBadge): string => {
  return record.typeField?.toString() || String(record.id);
};

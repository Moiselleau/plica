import { UserBadgeWhereInput } from "./UserBadgeWhereInput";
import { UserBadgeOrderByInput } from "./UserBadgeOrderByInput";

export type UserBadgeFindManyArgs = {
  where?: UserBadgeWhereInput;
  orderBy?: Array<UserBadgeOrderByInput>;
  skip?: number;
  take?: number;
};

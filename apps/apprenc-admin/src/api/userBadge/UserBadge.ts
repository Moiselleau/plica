import { User } from "../user/User";

export type UserBadge = {
  earnedAt: Date;
  id: string;
  typeField: string;
  user?: User;
};

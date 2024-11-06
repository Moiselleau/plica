import { Group } from "../group/Group";
import { User } from "../user/User";

export type GroupMember = {
  group?: Group;
  id: string;
  joinedAt: Date;
  role: string;
  user?: User;
};

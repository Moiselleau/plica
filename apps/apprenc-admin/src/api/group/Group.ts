import { Interest } from "../interest/Interest";
import { GroupMember } from "../groupMember/GroupMember";

export type Group = {
  createdAt: Date;
  description: string | null;
  id: string;
  interests?: Array<Interest>;
  members?: Array<GroupMember>;
  name: string;
};

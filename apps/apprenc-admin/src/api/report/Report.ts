import { User } from "../user/User";

export type Report = {
  createdAt: Date;
  description: string | null;
  id: string;
  reason: string;
  reportedUser?: User;
  status: string;
};

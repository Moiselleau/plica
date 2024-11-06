import { User } from "../user/User";

export type Notification = {
  content: string;
  createdAt: Date;
  id: string;
  read: boolean;
  typeField: string;
  user?: User;
};

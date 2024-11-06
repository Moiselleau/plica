import { User } from "../user/User";

export type Message = {
  content: string;
  createdAt: Date;
  id: string;
  mediaUrl: string | null;
  readAt: Date | null;
  receiver?: User;
  sender?: User;
};

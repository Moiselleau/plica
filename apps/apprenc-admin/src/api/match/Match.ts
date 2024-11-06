import { Message } from "../message/Message";
import { User } from "../user/User";

export type Match = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  updatedAt: Date;
  utilisateurs?: Array<User>;
};

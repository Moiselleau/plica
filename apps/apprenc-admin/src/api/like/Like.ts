import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  receiver?: User;
  sender?: User;
  status?: "PENDING" | "ACCEPTED" | "REJECTED";
};

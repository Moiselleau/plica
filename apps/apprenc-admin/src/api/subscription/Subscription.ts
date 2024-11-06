import { User } from "../user/User";

export type Subscription = {
  endDate: Date | null;
  id: string;
  startDate: Date;
  status?: "ACTIVE" | "CANCELLED" | "EXPIRED";
  type?: "FREE" | "PREMIUM" | "VIP";
  user?: User;
};

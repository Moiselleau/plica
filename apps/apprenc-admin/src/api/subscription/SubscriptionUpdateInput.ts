import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  endDate?: Date | null;
  status?: "ACTIVE" | "CANCELLED" | "EXPIRED";
  type?: "FREE" | "PREMIUM" | "VIP";
  user?: UserWhereUniqueInput;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  receiver?: UserWhereUniqueInput;
  sender?: UserWhereUniqueInput;
  status?: "PENDING" | "ACCEPTED" | "REJECTED";
};

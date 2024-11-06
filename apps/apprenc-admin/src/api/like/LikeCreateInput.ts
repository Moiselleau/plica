import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  receiver: UserWhereUniqueInput;
  sender: UserWhereUniqueInput;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
};

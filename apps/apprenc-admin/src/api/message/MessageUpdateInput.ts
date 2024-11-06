import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string;
  mediaUrl?: string | null;
  readAt?: Date | null;
  receiver?: UserWhereUniqueInput;
  sender?: UserWhereUniqueInput;
};

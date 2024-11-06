import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  content: string;
  mediaUrl?: string | null;
  readAt?: Date | null;
  receiver: UserWhereUniqueInput;
  sender: UserWhereUniqueInput;
};

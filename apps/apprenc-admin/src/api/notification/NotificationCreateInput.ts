import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  content: string;
  read: boolean;
  typeField: string;
  user: UserWhereUniqueInput;
};

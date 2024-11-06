import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  content?: string;
  read?: boolean;
  typeField?: string;
  user?: UserWhereUniqueInput;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportCreateInput = {
  description?: string | null;
  reason: string;
  reportedUser: UserWhereUniqueInput;
  status: string;
};

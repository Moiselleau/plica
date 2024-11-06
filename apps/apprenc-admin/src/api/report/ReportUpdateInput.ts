import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  description?: string | null;
  reason?: string;
  reportedUser?: UserWhereUniqueInput;
  status?: string;
};

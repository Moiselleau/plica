import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SocialAccountCreateInput = {
  provider: "EMAIL" | "GOOGLE" | "FACEBOOK" | "INSTAGRAM";
  providerId: string;
  user: UserWhereUniqueInput;
};

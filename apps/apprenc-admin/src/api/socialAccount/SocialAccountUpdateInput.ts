import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SocialAccountUpdateInput = {
  provider?: "EMAIL" | "GOOGLE" | "FACEBOOK" | "INSTAGRAM";
  providerId?: string;
  user?: UserWhereUniqueInput;
};

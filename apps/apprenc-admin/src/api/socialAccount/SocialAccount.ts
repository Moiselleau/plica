import { User } from "../user/User";

export type SocialAccount = {
  id: string;
  provider?: "EMAIL" | "GOOGLE" | "FACEBOOK" | "INSTAGRAM";
  providerId: string;
  user?: User;
};

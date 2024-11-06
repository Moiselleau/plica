import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SocialAccountWhereInput = {
  id?: StringFilter;
  provider?: "EMAIL" | "GOOGLE" | "FACEBOOK" | "INSTAGRAM";
  providerId?: StringFilter;
  user?: UserWhereUniqueInput;
};

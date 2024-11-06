import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type PhotoUpdateInput = {
  isMain?: boolean;
  profile?: ProfileWhereUniqueInput;
  url?: string;
  verified?: boolean;
};

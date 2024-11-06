import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type PhotoCreateInput = {
  isMain: boolean;
  profile: ProfileWhereUniqueInput;
  url: string;
  verified: boolean;
};

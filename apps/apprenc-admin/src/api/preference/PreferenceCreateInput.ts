import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type PreferenceCreateInput = {
  customPreferences?: string | null;
  drinking?: boolean | null;
  genderPreference: string;
  maxAge: number;
  maxDistance: number;
  minAge: number;
  profile: ProfileWhereUniqueInput;
  smoking?: boolean | null;
};
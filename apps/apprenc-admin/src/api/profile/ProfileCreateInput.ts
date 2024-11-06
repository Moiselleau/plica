import { InterestCreateNestedManyWithoutProfilesInput } from "./InterestCreateNestedManyWithoutProfilesInput";
import { PhotoCreateNestedManyWithoutProfilesInput } from "./PhotoCreateNestedManyWithoutProfilesInput";
import { PreferenceWhereUniqueInput } from "../preference/PreferenceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  bio?: string | null;
  bioAudio?: string | null;
  bioVideo?: string | null;
  birthDate: Date;
  city?: string | null;
  country?: string | null;
  firstName: string;
  gender: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY";
  interests?: InterestCreateNestedManyWithoutProfilesInput;
  lastName?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  matchCount: number;
  photos?: PhotoCreateNestedManyWithoutProfilesInput;
  preferences?: PreferenceWhereUniqueInput | null;
  user: UserWhereUniqueInput;
  viewCount: number;
};

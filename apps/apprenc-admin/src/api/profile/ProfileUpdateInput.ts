import { InterestUpdateManyWithoutProfilesInput } from "./InterestUpdateManyWithoutProfilesInput";
import { PhotoUpdateManyWithoutProfilesInput } from "./PhotoUpdateManyWithoutProfilesInput";
import { PreferenceWhereUniqueInput } from "../preference/PreferenceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  bio?: string | null;
  bioAudio?: string | null;
  bioVideo?: string | null;
  birthDate?: Date;
  city?: string | null;
  country?: string | null;
  firstName?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY";
  interests?: InterestUpdateManyWithoutProfilesInput;
  lastName?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  matchCount?: number;
  photos?: PhotoUpdateManyWithoutProfilesInput;
  preferences?: PreferenceWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
  viewCount?: number;
};

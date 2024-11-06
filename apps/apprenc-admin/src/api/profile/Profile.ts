import { Interest } from "../interest/Interest";
import { Photo } from "../photo/Photo";
import { Preference } from "../preference/Preference";
import { User } from "../user/User";

export type Profile = {
  bio: string | null;
  bioAudio: string | null;
  bioVideo: string | null;
  birthDate: Date;
  city: string | null;
  country: string | null;
  firstName: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY";
  id: string;
  interests?: Array<Interest>;
  lastActive: Date;
  lastName: string | null;
  latitude: number | null;
  longitude: number | null;
  matchCount: number;
  photos?: Array<Photo>;
  preferences?: Preference | null;
  user?: User;
  viewCount: number;
};

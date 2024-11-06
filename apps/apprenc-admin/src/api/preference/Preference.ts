import { Profile } from "../profile/Profile";

export type Preference = {
  customPreferences: string | null;
  drinking: boolean | null;
  genderPreference: string;
  id: string;
  maxAge: number;
  maxDistance: number;
  minAge: number;
  profile?: Profile;
  smoking: boolean | null;
};

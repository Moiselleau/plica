import { Profile } from "../profile/Profile";

export type Photo = {
  id: string;
  isMain: boolean;
  profile?: Profile;
  url: string;
  verified: boolean;
};

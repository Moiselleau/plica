import { Group } from "../group/Group";
import { Profile } from "../profile/Profile";

export type Interest = {
  category: string;
  groups?: Array<Group>;
  id: string;
  name: string;
  profiles?: Array<Profile>;
};

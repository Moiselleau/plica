import { GroupUpdateManyWithoutInterestsInput } from "./GroupUpdateManyWithoutInterestsInput";
import { ProfileUpdateManyWithoutInterestsInput } from "./ProfileUpdateManyWithoutInterestsInput";

export type InterestUpdateInput = {
  category?: string;
  groups?: GroupUpdateManyWithoutInterestsInput;
  name?: string;
  profiles?: ProfileUpdateManyWithoutInterestsInput;
};

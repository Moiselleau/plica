import { GroupCreateNestedManyWithoutInterestsInput } from "./GroupCreateNestedManyWithoutInterestsInput";
import { ProfileCreateNestedManyWithoutInterestsInput } from "./ProfileCreateNestedManyWithoutInterestsInput";

export type InterestCreateInput = {
  category: string;
  groups?: GroupCreateNestedManyWithoutInterestsInput;
  name: string;
  profiles?: ProfileCreateNestedManyWithoutInterestsInput;
};

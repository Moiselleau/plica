import { InterestUpdateManyWithoutGroupsInput } from "./InterestUpdateManyWithoutGroupsInput";
import { GroupMemberUpdateManyWithoutGroupsInput } from "./GroupMemberUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  description?: string | null;
  interests?: InterestUpdateManyWithoutGroupsInput;
  members?: GroupMemberUpdateManyWithoutGroupsInput;
  name?: string;
};

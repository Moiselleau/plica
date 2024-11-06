import { InterestCreateNestedManyWithoutGroupsInput } from "./InterestCreateNestedManyWithoutGroupsInput";
import { GroupMemberCreateNestedManyWithoutGroupsInput } from "./GroupMemberCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  description?: string | null;
  interests?: InterestCreateNestedManyWithoutGroupsInput;
  members?: GroupMemberCreateNestedManyWithoutGroupsInput;
  name: string;
};

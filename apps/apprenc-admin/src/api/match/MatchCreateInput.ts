import { MessageCreateNestedManyWithoutMatchesInput } from "./MessageCreateNestedManyWithoutMatchesInput";
import { UserCreateNestedManyWithoutMatchesInput } from "./UserCreateNestedManyWithoutMatchesInput";

export type MatchCreateInput = {
  messages?: MessageCreateNestedManyWithoutMatchesInput;
  utilisateurs?: UserCreateNestedManyWithoutMatchesInput;
};

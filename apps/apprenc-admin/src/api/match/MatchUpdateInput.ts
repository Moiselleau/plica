import { MessageUpdateManyWithoutMatchesInput } from "./MessageUpdateManyWithoutMatchesInput";
import { UserUpdateManyWithoutMatchesInput } from "./UserUpdateManyWithoutMatchesInput";

export type MatchUpdateInput = {
  messages?: MessageUpdateManyWithoutMatchesInput;
  utilisateurs?: UserUpdateManyWithoutMatchesInput;
};

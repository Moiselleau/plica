import { MatchCreateNestedManyWithoutMessagesInput } from "./MatchCreateNestedManyWithoutMessagesInput";

export type MessageCreateInput = {
  contenu?: string | null;
  match?: MatchCreateNestedManyWithoutMessagesInput;
};

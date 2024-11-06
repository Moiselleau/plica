import { MatchUpdateManyWithoutMessagesInput } from "./MatchUpdateManyWithoutMessagesInput";

export type MessageUpdateInput = {
  contenu?: string | null;
  match?: MatchUpdateManyWithoutMessagesInput;
};

import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventParticipantCreateInput = {
  event: EventWhereUniqueInput;
  status: string;
  user: UserWhereUniqueInput;
};

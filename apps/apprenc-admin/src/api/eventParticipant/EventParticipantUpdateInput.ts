import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventParticipantUpdateInput = {
  event?: EventWhereUniqueInput;
  status?: string;
  user?: UserWhereUniqueInput;
};

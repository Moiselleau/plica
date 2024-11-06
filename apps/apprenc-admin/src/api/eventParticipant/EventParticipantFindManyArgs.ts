import { EventParticipantWhereInput } from "./EventParticipantWhereInput";
import { EventParticipantOrderByInput } from "./EventParticipantOrderByInput";

export type EventParticipantFindManyArgs = {
  where?: EventParticipantWhereInput;
  orderBy?: Array<EventParticipantOrderByInput>;
  skip?: number;
  take?: number;
};

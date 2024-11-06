import { SortOrder } from "../../util/SortOrder";

export type EventParticipantOrderByInput = {
  eventId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
};

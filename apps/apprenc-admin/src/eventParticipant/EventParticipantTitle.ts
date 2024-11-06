import { EventParticipant as TEventParticipant } from "../api/eventParticipant/EventParticipant";

export const EVENTPARTICIPANT_TITLE_FIELD = "status";

export const EventParticipantTitle = (record: TEventParticipant): string => {
  return record.status?.toString() || String(record.id);
};

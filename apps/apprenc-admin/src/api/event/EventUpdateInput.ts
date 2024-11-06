import { EventParticipantUpdateManyWithoutEventsInput } from "./EventParticipantUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  city?: string | null;
  country?: string | null;
  description?: string;
  endDate?: Date;
  latitude?: number | null;
  longitude?: number | null;
  maxParticipants?: number | null;
  participants?: EventParticipantUpdateManyWithoutEventsInput;
  startDate?: Date;
  title?: string;
  type?: "SPEEDDATING" | "SOCIAL" | "WORKSHOP" | "OTHER";
};

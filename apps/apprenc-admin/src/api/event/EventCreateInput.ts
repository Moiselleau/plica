import { EventParticipantCreateNestedManyWithoutEventsInput } from "./EventParticipantCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  city?: string | null;
  country?: string | null;
  description: string;
  endDate: Date;
  latitude?: number | null;
  longitude?: number | null;
  maxParticipants?: number | null;
  participants?: EventParticipantCreateNestedManyWithoutEventsInput;
  startDate: Date;
  title: string;
  type: "SPEEDDATING" | "SOCIAL" | "WORKSHOP" | "OTHER";
};

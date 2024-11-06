import { EventParticipant } from "../eventParticipant/EventParticipant";

export type Event = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  description: string;
  endDate: Date;
  id: string;
  latitude: number | null;
  longitude: number | null;
  maxParticipants: number | null;
  participants?: Array<EventParticipant>;
  startDate: Date;
  title: string;
  type?: "SPEEDDATING" | "SOCIAL" | "WORKSHOP" | "OTHER";
};

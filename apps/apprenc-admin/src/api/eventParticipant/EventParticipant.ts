import { Event } from "../event/Event";
import { User } from "../user/User";

export type EventParticipant = {
  event?: Event;
  id: string;
  status: string;
  user?: User;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EventParticipantListRelationFilter } from "../eventParticipant/EventParticipantListRelationFilter";

export type EventWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  endDate?: DateTimeFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  maxParticipants?: IntNullableFilter;
  participants?: EventParticipantListRelationFilter;
  startDate?: DateTimeFilter;
  title?: StringFilter;
  type?: "SPEEDDATING" | "SOCIAL" | "WORKSHOP" | "OTHER";
};

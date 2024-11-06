import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventParticipantWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  status?: StringFilter;
  user?: UserWhereUniqueInput;
};

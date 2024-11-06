import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  maxParticipants?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  type?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  bio?: SortOrder;
  bioAudio?: SortOrder;
  bioVideo?: SortOrder;
  birthDate?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastActive?: SortOrder;
  lastName?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  matchCount?: SortOrder;
  preferencesId?: SortOrder;
  userId?: SortOrder;
  viewCount?: SortOrder;
};

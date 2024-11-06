import { SortOrder } from "../../util/SortOrder";

export type PreferenceOrderByInput = {
  customPreferences?: SortOrder;
  drinking?: SortOrder;
  genderPreference?: SortOrder;
  id?: SortOrder;
  maxAge?: SortOrder;
  maxDistance?: SortOrder;
  minAge?: SortOrder;
  profileId?: SortOrder;
  smoking?: SortOrder;
};

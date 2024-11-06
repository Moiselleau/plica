import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  id?: SortOrder;
  isMain?: SortOrder;
  profileId?: SortOrder;
  url?: SortOrder;
  verified?: SortOrder;
};

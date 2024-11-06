import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isProfilPhoto?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  utilisateursId?: SortOrder;
};

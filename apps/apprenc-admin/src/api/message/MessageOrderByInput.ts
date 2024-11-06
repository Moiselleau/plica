import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  contenu?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

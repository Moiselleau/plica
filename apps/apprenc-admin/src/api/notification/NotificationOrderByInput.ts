import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  read?: SortOrder;
  typeField?: SortOrder;
  userId?: SortOrder;
};

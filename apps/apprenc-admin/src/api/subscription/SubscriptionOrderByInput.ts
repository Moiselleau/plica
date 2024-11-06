import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  type?: SortOrder;
  userId?: SortOrder;
};

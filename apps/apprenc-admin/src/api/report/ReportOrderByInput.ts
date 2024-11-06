import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  reportedId?: SortOrder;
  status?: SortOrder;
};

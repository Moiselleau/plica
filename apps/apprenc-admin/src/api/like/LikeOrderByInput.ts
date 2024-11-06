import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
  status?: SortOrder;
};

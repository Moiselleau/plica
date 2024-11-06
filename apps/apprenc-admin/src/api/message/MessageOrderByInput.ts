import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mediaUrl?: SortOrder;
  readAt?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  mediaUrl?: SortOrder;
  type?: SortOrder;
  userId?: SortOrder;
};

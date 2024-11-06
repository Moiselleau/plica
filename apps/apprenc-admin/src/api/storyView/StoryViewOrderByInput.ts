import { SortOrder } from "../../util/SortOrder";

export type StoryViewOrderByInput = {
  id?: SortOrder;
  storyId?: SortOrder;
  viewedAt?: SortOrder;
  viewerId?: SortOrder;
};

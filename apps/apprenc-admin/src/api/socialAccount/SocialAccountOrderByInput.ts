import { SortOrder } from "../../util/SortOrder";

export type SocialAccountOrderByInput = {
  id?: SortOrder;
  provider?: SortOrder;
  providerId?: SortOrder;
  userId?: SortOrder;
};

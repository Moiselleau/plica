import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  authMethod?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  emailVerified?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  profileId?: SortOrder;
  roles?: SortOrder;
  subscriptionId?: SortOrder;
  trustScore?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  verificationStatus?: SortOrder;
};

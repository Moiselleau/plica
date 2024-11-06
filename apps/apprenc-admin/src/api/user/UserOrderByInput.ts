import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  authMethod?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  emailVerified?: SortOrder;
  id?: SortOrder;
  passwordHash?: SortOrder;
  phoneNumber?: SortOrder;
  profileId?: SortOrder;
  subscriptionId?: SortOrder;
  trustScore?: SortOrder;
  updatedAt?: SortOrder;
  verificationStatus?: SortOrder;
};

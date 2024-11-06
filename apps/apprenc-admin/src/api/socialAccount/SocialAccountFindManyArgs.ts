import { SocialAccountWhereInput } from "./SocialAccountWhereInput";
import { SocialAccountOrderByInput } from "./SocialAccountOrderByInput";

export type SocialAccountFindManyArgs = {
  where?: SocialAccountWhereInput;
  orderBy?: Array<SocialAccountOrderByInput>;
  skip?: number;
  take?: number;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUpdateInput = {
  isProfilPhoto?: boolean | null;
  url?: string | null;
  utilisateurs?: UserWhereUniqueInput | null;
};

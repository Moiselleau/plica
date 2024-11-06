import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoCreateInput = {
  isProfilPhoto?: boolean | null;
  url?: string | null;
  utilisateurs?: UserWhereUniqueInput | null;
};

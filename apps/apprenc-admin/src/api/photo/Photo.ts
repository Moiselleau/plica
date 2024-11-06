import { User } from "../user/User";

export type Photo = {
  createdAt: Date;
  id: string;
  isProfilPhoto: boolean | null;
  updatedAt: Date;
  url: string | null;
  utilisateurs?: User | null;
};

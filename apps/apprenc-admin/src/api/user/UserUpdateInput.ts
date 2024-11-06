import { MatchUpdateManyWithoutUsersInput } from "./MatchUpdateManyWithoutUsersInput";
import { Match } from "../match/Match";
import { PhotoUpdateManyWithoutUsersInput } from "./PhotoUpdateManyWithoutUsersInput";
import { Photo } from "../photo/Photo";
import { ProfilWhereUniqueInput } from "../profil/ProfilWhereUniqueInput";
import { Profil } from "../profil/Profil";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  Match?: MatchUpdateManyWithoutUsersInput;
  Photo?: PhotoUpdateManyWithoutUsersInput;
  Profil?: ProfilWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};

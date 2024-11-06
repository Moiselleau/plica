import { MatchCreateNestedManyWithoutUsersInput } from "./MatchCreateNestedManyWithoutUsersInput";
import { Match } from "../match/Match";
import { PhotoCreateNestedManyWithoutUsersInput } from "./PhotoCreateNestedManyWithoutUsersInput";
import { Photo } from "../photo/Photo";
import { ProfilWhereUniqueInput } from "../profil/ProfilWhereUniqueInput";
import { Profil } from "../profil/Profil";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  Match?: MatchCreateNestedManyWithoutUsersInput;
  Photo?: PhotoCreateNestedManyWithoutUsersInput;
  Profil?: ProfilWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};

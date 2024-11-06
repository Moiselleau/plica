import { Match } from "../match/Match";
import { Photo } from "../photo/Photo";
import { Profil } from "../profil/Profil";
import { JsonValue } from "type-fest";

export type User = {
  Match?: Array<Match>;
  Photo?: Array<Photo>;
  Profil?: Profil | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

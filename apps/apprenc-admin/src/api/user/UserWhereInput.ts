import { MatchListRelationFilter } from "../match/MatchListRelationFilter";
import { Match } from "../match/Match";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";
import { Photo } from "../photo/Photo";
import { ProfilWhereUniqueInput } from "../profil/ProfilWhereUniqueInput";
import { Profil } from "../profil/Profil";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  Match?: MatchListRelationFilter;
  Photo?: PhotoListRelationFilter;
  Profil?: ProfilWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};

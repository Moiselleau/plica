import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";

export type MessageWhereInput = {
  contenu?: StringNullableFilter;
  id?: StringFilter;
  match?: MatchListRelationFilter;
};

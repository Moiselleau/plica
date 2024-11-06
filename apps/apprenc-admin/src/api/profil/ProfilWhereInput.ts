import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfilWhereInput = {
  age?: DecimalNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  localisation?: StringNullableFilter;
};

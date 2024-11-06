import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfilWhereInput = {
  age?: DecimalNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  localisation?: StringNullableFilter;
  utilisateurs?: UserWhereUniqueInput;
};

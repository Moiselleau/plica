import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type PreferenceWhereInput = {
  customPreferences?: StringNullableFilter;
  drinking?: BooleanNullableFilter;
  genderPreference?: StringFilter;
  id?: StringFilter;
  maxAge?: IntFilter;
  maxDistance?: IntFilter;
  minAge?: IntFilter;
  profile?: ProfileWhereUniqueInput;
  smoking?: BooleanNullableFilter;
};

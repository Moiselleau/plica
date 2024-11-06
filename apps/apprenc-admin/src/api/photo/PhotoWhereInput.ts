import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type PhotoWhereInput = {
  id?: StringFilter;
  isMain?: BooleanFilter;
  profile?: ProfileWhereUniqueInput;
  url?: StringFilter;
  verified?: BooleanFilter;
};

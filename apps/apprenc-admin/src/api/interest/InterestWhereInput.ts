import { StringFilter } from "../../util/StringFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";

export type InterestWhereInput = {
  category?: StringFilter;
  groups?: GroupListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  profiles?: ProfileListRelationFilter;
};

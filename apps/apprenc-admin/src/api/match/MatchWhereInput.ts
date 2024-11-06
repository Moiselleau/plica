import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  utilisateurs?: UserListRelationFilter;
};

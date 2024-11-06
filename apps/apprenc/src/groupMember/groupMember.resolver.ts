import * as graphql from "@nestjs/graphql";
import { GroupMemberResolverBase } from "./base/groupMember.resolver.base";
import { GroupMember } from "./base/GroupMember";
import { GroupMemberService } from "./groupMember.service";

@graphql.Resolver(() => GroupMember)
export class GroupMemberResolver extends GroupMemberResolverBase {
  constructor(protected readonly service: GroupMemberService) {
    super(service);
  }
}

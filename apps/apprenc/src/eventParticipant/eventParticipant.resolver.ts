import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EventParticipantResolverBase } from "./base/eventParticipant.resolver.base";
import { EventParticipant } from "./base/EventParticipant";
import { EventParticipantService } from "./eventParticipant.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EventParticipant)
export class EventParticipantResolver extends EventParticipantResolverBase {
  constructor(
    protected readonly service: EventParticipantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

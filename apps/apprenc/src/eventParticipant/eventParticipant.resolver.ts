import * as graphql from "@nestjs/graphql";
import { EventParticipantResolverBase } from "./base/eventParticipant.resolver.base";
import { EventParticipant } from "./base/EventParticipant";
import { EventParticipantService } from "./eventParticipant.service";

@graphql.Resolver(() => EventParticipant)
export class EventParticipantResolver extends EventParticipantResolverBase {
  constructor(protected readonly service: EventParticipantService) {
    super(service);
  }
}

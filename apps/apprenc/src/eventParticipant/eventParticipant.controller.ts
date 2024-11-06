import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventParticipantService } from "./eventParticipant.service";
import { EventParticipantControllerBase } from "./base/eventParticipant.controller.base";

@swagger.ApiTags("eventParticipants")
@common.Controller("eventParticipants")
export class EventParticipantController extends EventParticipantControllerBase {
  constructor(protected readonly service: EventParticipantService) {
    super(service);
  }
}

import { Module } from "@nestjs/common";
import { EventParticipantModuleBase } from "./base/eventParticipant.module.base";
import { EventParticipantService } from "./eventParticipant.service";
import { EventParticipantController } from "./eventParticipant.controller";
import { EventParticipantResolver } from "./eventParticipant.resolver";

@Module({
  imports: [EventParticipantModuleBase],
  controllers: [EventParticipantController],
  providers: [EventParticipantService, EventParticipantResolver],
  exports: [EventParticipantService],
})
export class EventParticipantModule {}

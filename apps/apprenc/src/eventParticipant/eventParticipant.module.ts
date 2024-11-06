import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventParticipantModuleBase } from "./base/eventParticipant.module.base";
import { EventParticipantService } from "./eventParticipant.service";
import { EventParticipantController } from "./eventParticipant.controller";
import { EventParticipantResolver } from "./eventParticipant.resolver";

@Module({
  imports: [EventParticipantModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventParticipantController],
  providers: [EventParticipantService, EventParticipantResolver],
  exports: [EventParticipantService],
})
export class EventParticipantModule {}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventParticipantServiceBase } from "./base/eventParticipant.service.base";

@Injectable()
export class EventParticipantService extends EventParticipantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

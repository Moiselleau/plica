import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoryViewServiceBase } from "./base/storyView.service.base";

@Injectable()
export class StoryViewService extends StoryViewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

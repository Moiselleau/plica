import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroupMemberServiceBase } from "./base/groupMember.service.base";

@Injectable()
export class GroupMemberService extends GroupMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

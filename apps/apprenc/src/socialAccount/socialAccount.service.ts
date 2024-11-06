import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocialAccountServiceBase } from "./base/socialAccount.service.base";

@Injectable()
export class SocialAccountService extends SocialAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfilServiceBase } from "./base/profil.service.base";

@Injectable()
export class ProfilService extends ProfilServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

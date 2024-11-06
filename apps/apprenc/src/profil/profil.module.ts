import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProfilModuleBase } from "./base/profil.module.base";
import { ProfilService } from "./profil.service";
import { ProfilController } from "./profil.controller";
import { ProfilResolver } from "./profil.resolver";

@Module({
  imports: [ProfilModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProfilController],
  providers: [ProfilService, ProfilResolver],
  exports: [ProfilService],
})
export class ProfilModule {}

import { Module } from "@nestjs/common";
import { SocialAccountModuleBase } from "./base/socialAccount.module.base";
import { SocialAccountService } from "./socialAccount.service";
import { SocialAccountController } from "./socialAccount.controller";
import { SocialAccountResolver } from "./socialAccount.resolver";

@Module({
  imports: [SocialAccountModuleBase],
  controllers: [SocialAccountController],
  providers: [SocialAccountService, SocialAccountResolver],
  exports: [SocialAccountService],
})
export class SocialAccountModule {}

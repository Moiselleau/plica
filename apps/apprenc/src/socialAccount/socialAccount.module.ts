import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SocialAccountModuleBase } from "./base/socialAccount.module.base";
import { SocialAccountService } from "./socialAccount.service";
import { SocialAccountController } from "./socialAccount.controller";
import { SocialAccountResolver } from "./socialAccount.resolver";

@Module({
  imports: [SocialAccountModuleBase, forwardRef(() => AuthModule)],
  controllers: [SocialAccountController],
  providers: [SocialAccountService, SocialAccountResolver],
  exports: [SocialAccountService],
})
export class SocialAccountModule {}

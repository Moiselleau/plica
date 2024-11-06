import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserBadgeModuleBase } from "./base/userBadge.module.base";
import { UserBadgeService } from "./userBadge.service";
import { UserBadgeController } from "./userBadge.controller";
import { UserBadgeResolver } from "./userBadge.resolver";

@Module({
  imports: [UserBadgeModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserBadgeController],
  providers: [UserBadgeService, UserBadgeResolver],
  exports: [UserBadgeService],
})
export class UserBadgeModule {}

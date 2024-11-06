import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GroupMemberModuleBase } from "./base/groupMember.module.base";
import { GroupMemberService } from "./groupMember.service";
import { GroupMemberController } from "./groupMember.controller";
import { GroupMemberResolver } from "./groupMember.resolver";

@Module({
  imports: [GroupMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [GroupMemberController],
  providers: [GroupMemberService, GroupMemberResolver],
  exports: [GroupMemberService],
})
export class GroupMemberModule {}

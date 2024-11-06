import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StoryViewModuleBase } from "./base/storyView.module.base";
import { StoryViewService } from "./storyView.service";
import { StoryViewController } from "./storyView.controller";
import { StoryViewResolver } from "./storyView.resolver";

@Module({
  imports: [StoryViewModuleBase, forwardRef(() => AuthModule)],
  controllers: [StoryViewController],
  providers: [StoryViewService, StoryViewResolver],
  exports: [StoryViewService],
})
export class StoryViewModule {}

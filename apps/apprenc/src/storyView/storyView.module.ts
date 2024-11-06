import { Module } from "@nestjs/common";
import { StoryViewModuleBase } from "./base/storyView.module.base";
import { StoryViewService } from "./storyView.service";
import { StoryViewController } from "./storyView.controller";
import { StoryViewResolver } from "./storyView.resolver";

@Module({
  imports: [StoryViewModuleBase],
  controllers: [StoryViewController],
  providers: [StoryViewService, StoryViewResolver],
  exports: [StoryViewService],
})
export class StoryViewModule {}

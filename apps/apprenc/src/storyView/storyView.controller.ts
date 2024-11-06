import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoryViewService } from "./storyView.service";
import { StoryViewControllerBase } from "./base/storyView.controller.base";

@swagger.ApiTags("storyViews")
@common.Controller("storyViews")
export class StoryViewController extends StoryViewControllerBase {
  constructor(protected readonly service: StoryViewService) {
    super(service);
  }
}

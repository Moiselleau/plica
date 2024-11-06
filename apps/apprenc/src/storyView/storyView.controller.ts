import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StoryViewService } from "./storyView.service";
import { StoryViewControllerBase } from "./base/storyView.controller.base";

@swagger.ApiTags("storyViews")
@common.Controller("storyViews")
export class StoryViewController extends StoryViewControllerBase {
  constructor(
    protected readonly service: StoryViewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

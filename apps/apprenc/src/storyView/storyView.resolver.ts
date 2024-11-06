import * as graphql from "@nestjs/graphql";
import { StoryViewResolverBase } from "./base/storyView.resolver.base";
import { StoryView } from "./base/StoryView";
import { StoryViewService } from "./storyView.service";

@graphql.Resolver(() => StoryView)
export class StoryViewResolver extends StoryViewResolverBase {
  constructor(protected readonly service: StoryViewService) {
    super(service);
  }
}

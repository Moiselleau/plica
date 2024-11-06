import * as graphql from "@nestjs/graphql";
import { SocialAccountResolverBase } from "./base/socialAccount.resolver.base";
import { SocialAccount } from "./base/SocialAccount";
import { SocialAccountService } from "./socialAccount.service";

@graphql.Resolver(() => SocialAccount)
export class SocialAccountResolver extends SocialAccountResolverBase {
  constructor(protected readonly service: SocialAccountService) {
    super(service);
  }
}

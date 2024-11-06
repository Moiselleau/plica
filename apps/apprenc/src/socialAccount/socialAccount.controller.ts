import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SocialAccountService } from "./socialAccount.service";
import { SocialAccountControllerBase } from "./base/socialAccount.controller.base";

@swagger.ApiTags("socialAccounts")
@common.Controller("socialAccounts")
export class SocialAccountController extends SocialAccountControllerBase {
  constructor(protected readonly service: SocialAccountService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProfilService } from "./profil.service";
import { ProfilControllerBase } from "./base/profil.controller.base";

@swagger.ApiTags("profils")
@common.Controller("profils")
export class ProfilController extends ProfilControllerBase {
  constructor(
    protected readonly service: ProfilService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

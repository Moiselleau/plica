/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Profil } from "./Profil";
import { ProfilCountArgs } from "./ProfilCountArgs";
import { ProfilFindManyArgs } from "./ProfilFindManyArgs";
import { ProfilFindUniqueArgs } from "./ProfilFindUniqueArgs";
import { CreateProfilArgs } from "./CreateProfilArgs";
import { UpdateProfilArgs } from "./UpdateProfilArgs";
import { DeleteProfilArgs } from "./DeleteProfilArgs";
import { ProfilService } from "../profil.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Profil)
export class ProfilResolverBase {
  constructor(
    protected readonly service: ProfilService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "read",
    possession: "any",
  })
  async _profilsMeta(
    @graphql.Args() args: ProfilCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Profil])
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "read",
    possession: "any",
  })
  async profils(@graphql.Args() args: ProfilFindManyArgs): Promise<Profil[]> {
    return this.service.profils(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Profil, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "read",
    possession: "own",
  })
  async profil(
    @graphql.Args() args: ProfilFindUniqueArgs
  ): Promise<Profil | null> {
    const result = await this.service.profil(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profil)
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "create",
    possession: "any",
  })
  async createProfil(@graphql.Args() args: CreateProfilArgs): Promise<Profil> {
    return await this.service.createProfil({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profil)
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "update",
    possession: "any",
  })
  async updateProfil(
    @graphql.Args() args: UpdateProfilArgs
  ): Promise<Profil | null> {
    try {
      return await this.service.updateProfil({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Profil)
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "delete",
    possession: "any",
  })
  async deleteProfil(
    @graphql.Args() args: DeleteProfilArgs
  ): Promise<Profil | null> {
    try {
      return await this.service.deleteProfil(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
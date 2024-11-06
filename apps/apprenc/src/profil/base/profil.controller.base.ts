/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProfilService } from "../profil.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProfilCreateInput } from "./ProfilCreateInput";
import { Profil } from "./Profil";
import { ProfilFindManyArgs } from "./ProfilFindManyArgs";
import { ProfilWhereUniqueInput } from "./ProfilWhereUniqueInput";
import { ProfilUpdateInput } from "./ProfilUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProfilControllerBase {
  constructor(
    protected readonly service: ProfilService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Profil })
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProfil(@common.Body() data: ProfilCreateInput): Promise<Profil> {
    return await this.service.createProfil({
      data: data,
      select: {
        age: true,
        createdAt: true,
        description: true,
        id: true,
        interets: true,
        localisation: true,
        sexe: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Profil] })
  @ApiNestedQuery(ProfilFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async profils(@common.Req() request: Request): Promise<Profil[]> {
    const args = plainToClass(ProfilFindManyArgs, request.query);
    return this.service.profils({
      ...args,
      select: {
        age: true,
        createdAt: true,
        description: true,
        id: true,
        interets: true,
        localisation: true,
        sexe: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Profil })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async profil(
    @common.Param() params: ProfilWhereUniqueInput
  ): Promise<Profil | null> {
    const result = await this.service.profil({
      where: params,
      select: {
        age: true,
        createdAt: true,
        description: true,
        id: true,
        interets: true,
        localisation: true,
        sexe: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Profil })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProfil(
    @common.Param() params: ProfilWhereUniqueInput,
    @common.Body() data: ProfilUpdateInput
  ): Promise<Profil | null> {
    try {
      return await this.service.updateProfil({
        where: params,
        data: data,
        select: {
          age: true,
          createdAt: true,
          description: true,
          id: true,
          interets: true,
          localisation: true,
          sexe: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Profil })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Profil",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProfil(
    @common.Param() params: ProfilWhereUniqueInput
  ): Promise<Profil | null> {
    try {
      return await this.service.deleteProfil({
        where: params,
        select: {
          age: true,
          createdAt: true,
          description: true,
          id: true,
          interets: true,
          localisation: true,
          sexe: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
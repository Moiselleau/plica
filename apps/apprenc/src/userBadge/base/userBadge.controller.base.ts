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
import { UserBadgeService } from "../userBadge.service";
import { UserBadgeCreateInput } from "./UserBadgeCreateInput";
import { UserBadge } from "./UserBadge";
import { UserBadgeFindManyArgs } from "./UserBadgeFindManyArgs";
import { UserBadgeWhereUniqueInput } from "./UserBadgeWhereUniqueInput";
import { UserBadgeUpdateInput } from "./UserBadgeUpdateInput";

export class UserBadgeControllerBase {
  constructor(protected readonly service: UserBadgeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserBadge })
  async createUserBadge(
    @common.Body() data: UserBadgeCreateInput
  ): Promise<UserBadge> {
    return await this.service.createUserBadge({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        earnedAt: true,
        id: true,
        typeField: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserBadge] })
  @ApiNestedQuery(UserBadgeFindManyArgs)
  async userBadges(@common.Req() request: Request): Promise<UserBadge[]> {
    const args = plainToClass(UserBadgeFindManyArgs, request.query);
    return this.service.userBadges({
      ...args,
      select: {
        earnedAt: true,
        id: true,
        typeField: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserBadge })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userBadge(
    @common.Param() params: UserBadgeWhereUniqueInput
  ): Promise<UserBadge | null> {
    const result = await this.service.userBadge({
      where: params,
      select: {
        earnedAt: true,
        id: true,
        typeField: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserBadge })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserBadge(
    @common.Param() params: UserBadgeWhereUniqueInput,
    @common.Body() data: UserBadgeUpdateInput
  ): Promise<UserBadge | null> {
    try {
      return await this.service.updateUserBadge({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          earnedAt: true,
          id: true,
          typeField: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: UserBadge })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserBadge(
    @common.Param() params: UserBadgeWhereUniqueInput
  ): Promise<UserBadge | null> {
    try {
      return await this.service.deleteUserBadge({
        where: params,
        select: {
          earnedAt: true,
          id: true,
          typeField: true,

          user: {
            select: {
              id: true,
            },
          },
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

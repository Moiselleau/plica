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
import { GroupService } from "../group.service";
import { GroupCreateInput } from "./GroupCreateInput";
import { Group } from "./Group";
import { GroupFindManyArgs } from "./GroupFindManyArgs";
import { GroupWhereUniqueInput } from "./GroupWhereUniqueInput";
import { GroupUpdateInput } from "./GroupUpdateInput";
import { InterestFindManyArgs } from "../../interest/base/InterestFindManyArgs";
import { Interest } from "../../interest/base/Interest";
import { InterestWhereUniqueInput } from "../../interest/base/InterestWhereUniqueInput";
import { GroupMemberFindManyArgs } from "../../groupMember/base/GroupMemberFindManyArgs";
import { GroupMember } from "../../groupMember/base/GroupMember";
import { GroupMemberWhereUniqueInput } from "../../groupMember/base/GroupMemberWhereUniqueInput";

export class GroupControllerBase {
  constructor(protected readonly service: GroupService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Group })
  async createGroup(@common.Body() data: GroupCreateInput): Promise<Group> {
    return await this.service.createGroup({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Group] })
  @ApiNestedQuery(GroupFindManyArgs)
  async groups(@common.Req() request: Request): Promise<Group[]> {
    const args = plainToClass(GroupFindManyArgs, request.query);
    return this.service.groups({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async group(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    const result = await this.service.group({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGroup(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() data: GroupUpdateInput
  ): Promise<Group | null> {
    try {
      return await this.service.updateGroup({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGroup(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    try {
      return await this.service.deleteGroup({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
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

  @common.Get("/:id/interests")
  @ApiNestedQuery(InterestFindManyArgs)
  async findInterests(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Interest[]> {
    const query = plainToClass(InterestFindManyArgs, request.query);
    const results = await this.service.findInterests(params.id, {
      ...query,
      select: {
        category: true,
        id: true,
        name: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/interests")
  async connectInterests(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: InterestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      interests: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/interests")
  async updateInterests(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: InterestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      interests: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/interests")
  async disconnectInterests(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: InterestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      interests: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/members")
  @ApiNestedQuery(GroupMemberFindManyArgs)
  async findMembers(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<GroupMember[]> {
    const query = plainToClass(GroupMemberFindManyArgs, request.query);
    const results = await this.service.findMembers(params.id, {
      ...query,
      select: {
        group: {
          select: {
            id: true,
          },
        },

        id: true,
        joinedAt: true,
        role: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/members")
  async connectMembers(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: GroupMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/members")
  async updateMembers(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: GroupMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/members")
  async disconnectMembers(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: GroupMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }
}
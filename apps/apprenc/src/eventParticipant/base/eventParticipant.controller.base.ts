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
import { EventParticipantService } from "../eventParticipant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EventParticipantCreateInput } from "./EventParticipantCreateInput";
import { EventParticipant } from "./EventParticipant";
import { EventParticipantFindManyArgs } from "./EventParticipantFindManyArgs";
import { EventParticipantWhereUniqueInput } from "./EventParticipantWhereUniqueInput";
import { EventParticipantUpdateInput } from "./EventParticipantUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EventParticipantControllerBase {
  constructor(
    protected readonly service: EventParticipantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EventParticipant })
  @nestAccessControl.UseRoles({
    resource: "EventParticipant",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEventParticipant(
    @common.Body() data: EventParticipantCreateInput
  ): Promise<EventParticipant> {
    return await this.service.createEventParticipant({
      data: {
        ...data,

        event: {
          connect: data.event,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        event: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [EventParticipant] })
  @ApiNestedQuery(EventParticipantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EventParticipant",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async eventParticipants(
    @common.Req() request: Request
  ): Promise<EventParticipant[]> {
    const args = plainToClass(EventParticipantFindManyArgs, request.query);
    return this.service.eventParticipants({
      ...args,
      select: {
        event: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EventParticipant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventParticipant",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async eventParticipant(
    @common.Param() params: EventParticipantWhereUniqueInput
  ): Promise<EventParticipant | null> {
    const result = await this.service.eventParticipant({
      where: params,
      select: {
        event: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,

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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EventParticipant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventParticipant",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEventParticipant(
    @common.Param() params: EventParticipantWhereUniqueInput,
    @common.Body() data: EventParticipantUpdateInput
  ): Promise<EventParticipant | null> {
    try {
      return await this.service.updateEventParticipant({
        where: params,
        data: {
          ...data,

          event: {
            connect: data.event,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          event: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,

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
  @swagger.ApiOkResponse({ type: EventParticipant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventParticipant",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEventParticipant(
    @common.Param() params: EventParticipantWhereUniqueInput
  ): Promise<EventParticipant | null> {
    try {
      return await this.service.deleteEventParticipant({
        where: params,
        select: {
          event: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,

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

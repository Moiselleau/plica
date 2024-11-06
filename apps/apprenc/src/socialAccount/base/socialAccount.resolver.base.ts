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
import { SocialAccount } from "./SocialAccount";
import { SocialAccountCountArgs } from "./SocialAccountCountArgs";
import { SocialAccountFindManyArgs } from "./SocialAccountFindManyArgs";
import { SocialAccountFindUniqueArgs } from "./SocialAccountFindUniqueArgs";
import { CreateSocialAccountArgs } from "./CreateSocialAccountArgs";
import { UpdateSocialAccountArgs } from "./UpdateSocialAccountArgs";
import { DeleteSocialAccountArgs } from "./DeleteSocialAccountArgs";
import { User } from "../../user/base/User";
import { SocialAccountService } from "../socialAccount.service";
@graphql.Resolver(() => SocialAccount)
export class SocialAccountResolverBase {
  constructor(protected readonly service: SocialAccountService) {}

  async _socialAccountsMeta(
    @graphql.Args() args: SocialAccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SocialAccount])
  async socialAccounts(
    @graphql.Args() args: SocialAccountFindManyArgs
  ): Promise<SocialAccount[]> {
    return this.service.socialAccounts(args);
  }

  @graphql.Query(() => SocialAccount, { nullable: true })
  async socialAccount(
    @graphql.Args() args: SocialAccountFindUniqueArgs
  ): Promise<SocialAccount | null> {
    const result = await this.service.socialAccount(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SocialAccount)
  async createSocialAccount(
    @graphql.Args() args: CreateSocialAccountArgs
  ): Promise<SocialAccount> {
    return await this.service.createSocialAccount({
      ...args,
      data: {
        ...args.data,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => SocialAccount)
  async updateSocialAccount(
    @graphql.Args() args: UpdateSocialAccountArgs
  ): Promise<SocialAccount | null> {
    try {
      return await this.service.updateSocialAccount({
        ...args,
        data: {
          ...args.data,

          user: {
            connect: args.data.user,
          },
        },
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

  @graphql.Mutation(() => SocialAccount)
  async deleteSocialAccount(
    @graphql.Args() args: DeleteSocialAccountArgs
  ): Promise<SocialAccount | null> {
    try {
      return await this.service.deleteSocialAccount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: SocialAccount): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

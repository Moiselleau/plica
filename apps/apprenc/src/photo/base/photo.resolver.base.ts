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
import { Photo } from "./Photo";
import { PhotoCountArgs } from "./PhotoCountArgs";
import { PhotoFindManyArgs } from "./PhotoFindManyArgs";
import { PhotoFindUniqueArgs } from "./PhotoFindUniqueArgs";
import { CreatePhotoArgs } from "./CreatePhotoArgs";
import { UpdatePhotoArgs } from "./UpdatePhotoArgs";
import { DeletePhotoArgs } from "./DeletePhotoArgs";
import { Profile } from "../../profile/base/Profile";
import { PhotoService } from "../photo.service";
@graphql.Resolver(() => Photo)
export class PhotoResolverBase {
  constructor(protected readonly service: PhotoService) {}

  async _photosMeta(
    @graphql.Args() args: PhotoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Photo])
  async photos(@graphql.Args() args: PhotoFindManyArgs): Promise<Photo[]> {
    return this.service.photos(args);
  }

  @graphql.Query(() => Photo, { nullable: true })
  async photo(
    @graphql.Args() args: PhotoFindUniqueArgs
  ): Promise<Photo | null> {
    const result = await this.service.photo(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Photo)
  async createPhoto(@graphql.Args() args: CreatePhotoArgs): Promise<Photo> {
    return await this.service.createPhoto({
      ...args,
      data: {
        ...args.data,

        profile: {
          connect: args.data.profile,
        },
      },
    });
  }

  @graphql.Mutation(() => Photo)
  async updatePhoto(
    @graphql.Args() args: UpdatePhotoArgs
  ): Promise<Photo | null> {
    try {
      return await this.service.updatePhoto({
        ...args,
        data: {
          ...args.data,

          profile: {
            connect: args.data.profile,
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

  @graphql.Mutation(() => Photo)
  async deletePhoto(
    @graphql.Args() args: DeletePhotoArgs
  ): Promise<Photo | null> {
    try {
      return await this.service.deletePhoto(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Profile, {
    nullable: true,
    name: "profile",
  })
  async getProfile(@graphql.Parent() parent: Photo): Promise<Profile | null> {
    const result = await this.service.getProfile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

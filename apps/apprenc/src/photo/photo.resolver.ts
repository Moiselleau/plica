import * as graphql from "@nestjs/graphql";
import { PhotoResolverBase } from "./base/photo.resolver.base";
import { Photo } from "./base/Photo";
import { PhotoService } from "./photo.service";

@graphql.Resolver(() => Photo)
export class PhotoResolver extends PhotoResolverBase {
  constructor(protected readonly service: PhotoService) {
    super(service);
  }
}

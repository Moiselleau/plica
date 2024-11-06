/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumSocialAccountProvider } from "./EnumSocialAccountProvider";
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class SocialAccountUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumSocialAccountProvider,
  })
  @IsEnum(EnumSocialAccountProvider)
  @IsOptional()
  @Field(() => EnumSocialAccountProvider, {
    nullable: true,
  })
  provider?: "EMAIL" | "GOOGLE" | "FACEBOOK" | "INSTAGRAM";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  providerId?: string;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { SocialAccountUpdateInput as SocialAccountUpdateInput };

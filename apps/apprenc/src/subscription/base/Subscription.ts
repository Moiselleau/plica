/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumSubscriptionStatus } from "./EnumSubscriptionStatus";
import { EnumSubscriptionType } from "./EnumSubscriptionType";
import { User } from "../../user/base/User";

@ObjectType()
class Subscription {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startDate!: Date;

  @ApiProperty({
    required: true,
    enum: EnumSubscriptionStatus,
  })
  @IsEnum(EnumSubscriptionStatus)
  @Field(() => EnumSubscriptionStatus, {
    nullable: true,
  })
  status?: "ACTIVE" | "CANCELLED" | "EXPIRED";

  @ApiProperty({
    required: true,
    enum: EnumSubscriptionType,
  })
  @IsEnum(EnumSubscriptionType)
  @Field(() => EnumSubscriptionType, {
    nullable: true,
  })
  type?: "FREE" | "PREMIUM" | "VIP";

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}

export { Subscription as Subscription };
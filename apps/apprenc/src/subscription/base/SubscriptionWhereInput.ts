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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EnumSubscriptionStatus } from "./EnumSubscriptionStatus";
import { EnumSubscriptionType } from "./EnumSubscriptionType";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class SubscriptionWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  startDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    enum: EnumSubscriptionStatus,
  })
  @IsEnum(EnumSubscriptionStatus)
  @IsOptional()
  @Field(() => EnumSubscriptionStatus, {
    nullable: true,
  })
  status?: "ACTIVE" | "CANCELLED" | "EXPIRED";

  @ApiProperty({
    required: false,
    enum: EnumSubscriptionType,
  })
  @IsEnum(EnumSubscriptionType)
  @IsOptional()
  @Field(() => EnumSubscriptionType, {
    nullable: true,
  })
  type?: "FREE" | "PREMIUM" | "VIP";

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

export { SubscriptionWhereInput as SubscriptionWhereInput };
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

import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  IsEnum,
  ValidateNested,
  IsNumber,
  Max,
  IsInt,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumProfileGender } from "./EnumProfileGender";
import { InterestCreateNestedManyWithoutProfilesInput } from "./InterestCreateNestedManyWithoutProfilesInput";
import { PhotoCreateNestedManyWithoutProfilesInput } from "./PhotoCreateNestedManyWithoutProfilesInput";
import { PreferenceWhereUniqueInput } from "../../preference/base/PreferenceWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ProfileCreateInput {
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
  bio?: string | null;

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
  bioAudio?: string | null;

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
  bioVideo?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  birthDate!: Date;

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
  city?: string | null;

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
  country?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: true,
    enum: EnumProfileGender,
  })
  @IsEnum(EnumProfileGender)
  @Field(() => EnumProfileGender)
  gender!: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY";

  @ApiProperty({
    required: true,
    type: () => InterestCreateNestedManyWithoutProfilesInput,
  })
  @ValidateNested()
  @Type(() => InterestCreateNestedManyWithoutProfilesInput)
  @IsOptional()
  @Field(() => InterestCreateNestedManyWithoutProfilesInput, {
    nullable: true,
  })
  interests?: InterestCreateNestedManyWithoutProfilesInput;

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
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  latitude?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  longitude?: number | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  matchCount!: number;

  @ApiProperty({
    required: false,
    type: () => PhotoCreateNestedManyWithoutProfilesInput,
  })
  @ValidateNested()
  @Type(() => PhotoCreateNestedManyWithoutProfilesInput)
  @IsOptional()
  @Field(() => PhotoCreateNestedManyWithoutProfilesInput, {
    nullable: true,
  })
  photos?: PhotoCreateNestedManyWithoutProfilesInput;

  @ApiProperty({
    required: false,
    type: () => PreferenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PreferenceWhereUniqueInput)
  @IsOptional()
  @Field(() => PreferenceWhereUniqueInput, {
    nullable: true,
  })
  preferences?: PreferenceWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  viewCount!: number;
}

export { ProfileCreateInput as ProfileCreateInput };

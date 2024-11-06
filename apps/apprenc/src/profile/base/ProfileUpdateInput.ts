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
import { InterestUpdateManyWithoutProfilesInput } from "./InterestUpdateManyWithoutProfilesInput";
import { PhotoUpdateManyWithoutProfilesInput } from "./PhotoUpdateManyWithoutProfilesInput";
import { PreferenceWhereUniqueInput } from "../../preference/base/PreferenceWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ProfileUpdateInput {
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
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  birthDate?: Date;

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
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string;

  @ApiProperty({
    required: false,
    enum: EnumProfileGender,
  })
  @IsEnum(EnumProfileGender)
  @IsOptional()
  @Field(() => EnumProfileGender, {
    nullable: true,
  })
  gender?: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY";

  @ApiProperty({
    required: false,
    type: () => InterestUpdateManyWithoutProfilesInput,
  })
  @ValidateNested()
  @Type(() => InterestUpdateManyWithoutProfilesInput)
  @IsOptional()
  @Field(() => InterestUpdateManyWithoutProfilesInput, {
    nullable: true,
  })
  interests?: InterestUpdateManyWithoutProfilesInput;

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
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  matchCount?: number;

  @ApiProperty({
    required: false,
    type: () => PhotoUpdateManyWithoutProfilesInput,
  })
  @ValidateNested()
  @Type(() => PhotoUpdateManyWithoutProfilesInput)
  @IsOptional()
  @Field(() => PhotoUpdateManyWithoutProfilesInput, {
    nullable: true,
  })
  photos?: PhotoUpdateManyWithoutProfilesInput;

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

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  viewCount?: number;
}

export { ProfileUpdateInput as ProfileUpdateInput };

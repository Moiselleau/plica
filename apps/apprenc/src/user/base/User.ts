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
import { EnumUserAuthMethod } from "./EnumUserAuthMethod";

import {
  IsEnum,
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsBoolean,
  MaxLength,
  IsNumber,
  Max,
} from "class-validator";

import { UserBadge } from "../../userBadge/base/UserBadge";
import { Type } from "class-transformer";
import { EventParticipant } from "../../eventParticipant/base/EventParticipant";
import { GroupMember } from "../../groupMember/base/GroupMember";
import { Notification } from "../../notification/base/Notification";
import { Profile } from "../../profile/base/Profile";
import { Like } from "../../like/base/Like";
import { Message } from "../../message/base/Message";
import { Report } from "../../report/base/Report";
import { SocialAccount } from "../../socialAccount/base/SocialAccount";
import { Story } from "../../story/base/Story";
import { Subscription } from "../../subscription/base/Subscription";
import { EnumUserVerificationStatus } from "./EnumUserVerificationStatus";

@ObjectType()
class User {
  @ApiProperty({
    required: true,
    enum: EnumUserAuthMethod,
  })
  @IsEnum(EnumUserAuthMethod)
  @Field(() => EnumUserAuthMethod, {
    nullable: true,
  })
  authMethod?: "EMAIL" | "GOOGLE" | "FACEBOOK" | "INSTAGRAM";

  @ApiProperty({
    required: false,
    type: () => [UserBadge],
  })
  @ValidateNested()
  @Type(() => UserBadge)
  @IsOptional()
  badges?: Array<UserBadge>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  emailVerified!: boolean;

  @ApiProperty({
    required: false,
    type: () => [EventParticipant],
  })
  @ValidateNested()
  @Type(() => EventParticipant)
  @IsOptional()
  events?: Array<EventParticipant>;

  @ApiProperty({
    required: false,
    type: () => [GroupMember],
  })
  @ValidateNested()
  @Type(() => GroupMember)
  @IsOptional()
  groups?: Array<GroupMember>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Notification],
  })
  @ValidateNested()
  @Type(() => Notification)
  @IsOptional()
  notifications?: Array<Notification>;

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
  phoneNumber!: string | null;

  @ApiProperty({
    required: false,
    type: () => Profile,
  })
  @ValidateNested()
  @Type(() => Profile)
  @IsOptional()
  profile?: Profile | null;

  @ApiProperty({
    required: false,
    type: () => [Like],
  })
  @ValidateNested()
  @Type(() => Like)
  @IsOptional()
  receivedLikes?: Array<Like>;

  @ApiProperty({
    required: false,
    type: () => [Message],
  })
  @ValidateNested()
  @Type(() => Message)
  @IsOptional()
  receivedMessages?: Array<Message>;

  @ApiProperty({
    required: false,
    type: () => [Report],
  })
  @ValidateNested()
  @Type(() => Report)
  @IsOptional()
  reports?: Array<Report>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  roles!: string;

  @ApiProperty({
    required: false,
    type: () => [Like],
  })
  @ValidateNested()
  @Type(() => Like)
  @IsOptional()
  sentLikes?: Array<Like>;

  @ApiProperty({
    required: false,
    type: () => [Message],
  })
  @ValidateNested()
  @Type(() => Message)
  @IsOptional()
  sentMessages?: Array<Message>;

  @ApiProperty({
    required: false,
    type: () => [SocialAccount],
  })
  @ValidateNested()
  @Type(() => SocialAccount)
  @IsOptional()
  socialAccounts?: Array<SocialAccount>;

  @ApiProperty({
    required: false,
    type: () => [Story],
  })
  @ValidateNested()
  @Type(() => Story)
  @IsOptional()
  stories?: Array<Story>;

  @ApiProperty({
    required: false,
    type: () => Subscription,
  })
  @ValidateNested()
  @Type(() => Subscription)
  @IsOptional()
  subscription?: Subscription | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Number)
  trustScore!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: true,
    enum: EnumUserVerificationStatus,
  })
  @IsEnum(EnumUserVerificationStatus)
  @Field(() => EnumUserVerificationStatus, {
    nullable: true,
  })
  verificationStatus?: "PENDING" | "VERIFIED" | "REJECTED";
}

export { User as User };

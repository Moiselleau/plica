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
import { EnumUserAuthMethod } from "./EnumUserAuthMethod";

import {
  IsEnum,
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  MaxLength,
  IsNumber,
  Max,
} from "class-validator";

import { UserBadgeCreateNestedManyWithoutUsersInput } from "./UserBadgeCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { EventParticipantCreateNestedManyWithoutUsersInput } from "./EventParticipantCreateNestedManyWithoutUsersInput";
import { GroupMemberCreateNestedManyWithoutUsersInput } from "./GroupMemberCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../../profile/base/ProfileWhereUniqueInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { ReportCreateNestedManyWithoutUsersInput } from "./ReportCreateNestedManyWithoutUsersInput";
import { SocialAccountCreateNestedManyWithoutUsersInput } from "./SocialAccountCreateNestedManyWithoutUsersInput";
import { StoryCreateNestedManyWithoutUsersInput } from "./StoryCreateNestedManyWithoutUsersInput";
import { SubscriptionWhereUniqueInput } from "../../subscription/base/SubscriptionWhereUniqueInput";
import { EnumUserVerificationStatus } from "./EnumUserVerificationStatus";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumUserAuthMethod,
  })
  @IsEnum(EnumUserAuthMethod)
  @Field(() => EnumUserAuthMethod)
  authMethod!: "EMAIL" | "GOOGLE" | "FACEBOOK" | "INSTAGRAM";

  @ApiProperty({
    required: false,
    type: () => UserBadgeCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserBadgeCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserBadgeCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  badges?: UserBadgeCreateNestedManyWithoutUsersInput;

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
    type: () => EventParticipantCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventParticipantCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventParticipantCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  events?: EventParticipantCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => GroupMemberCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => GroupMemberCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => GroupMemberCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  groups?: GroupMemberCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

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
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => ProfileWhereUniqueInput, {
    nullable: true,
  })
  profile?: ProfileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => LikeCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LikeCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LikeCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  receivedLikes?: LikeCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MessageCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MessageCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MessageCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  receivedMessages?: MessageCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ReportCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  reports?: ReportCreateNestedManyWithoutUsersInput;

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
    type: () => LikeCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LikeCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LikeCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  sentLikes?: LikeCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MessageCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MessageCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MessageCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  sentMessages?: MessageCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SocialAccountCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SocialAccountCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SocialAccountCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  socialAccounts?: SocialAccountCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => StoryCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => StoryCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => StoryCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  stories?: StoryCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SubscriptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionWhereUniqueInput)
  @IsOptional()
  @Field(() => SubscriptionWhereUniqueInput, {
    nullable: true,
  })
  subscription?: SubscriptionWhereUniqueInput | null;

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
  @Field(() => EnumUserVerificationStatus)
  verificationStatus!: "PENDING" | "VERIFIED" | "REJECTED";
}

export { UserCreateInput as UserCreateInput };

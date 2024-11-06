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
import { StoryViewWhereInput } from "./StoryViewWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StoryViewListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StoryViewWhereInput,
  })
  @ValidateNested()
  @Type(() => StoryViewWhereInput)
  @IsOptional()
  @Field(() => StoryViewWhereInput, {
    nullable: true,
  })
  every?: StoryViewWhereInput;

  @ApiProperty({
    required: false,
    type: () => StoryViewWhereInput,
  })
  @ValidateNested()
  @Type(() => StoryViewWhereInput)
  @IsOptional()
  @Field(() => StoryViewWhereInput, {
    nullable: true,
  })
  some?: StoryViewWhereInput;

  @ApiProperty({
    required: false,
    type: () => StoryViewWhereInput,
  })
  @ValidateNested()
  @Type(() => StoryViewWhereInput)
  @IsOptional()
  @Field(() => StoryViewWhereInput, {
    nullable: true,
  })
  none?: StoryViewWhereInput;
}
export { StoryViewListRelationFilter as StoryViewListRelationFilter };

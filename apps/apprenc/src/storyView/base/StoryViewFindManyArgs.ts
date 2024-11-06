/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StoryViewWhereInput } from "./StoryViewWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StoryViewOrderByInput } from "./StoryViewOrderByInput";

@ArgsType()
class StoryViewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StoryViewWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StoryViewWhereInput, { nullable: true })
  @Type(() => StoryViewWhereInput)
  where?: StoryViewWhereInput;

  @ApiProperty({
    required: false,
    type: [StoryViewOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StoryViewOrderByInput], { nullable: true })
  @Type(() => StoryViewOrderByInput)
  orderBy?: Array<StoryViewOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StoryViewFindManyArgs as StoryViewFindManyArgs };
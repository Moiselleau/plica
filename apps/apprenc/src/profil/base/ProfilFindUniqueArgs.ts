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
import { ProfilWhereUniqueInput } from "./ProfilWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ProfilFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ProfilWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfilWhereUniqueInput)
  @Field(() => ProfilWhereUniqueInput, { nullable: false })
  where!: ProfilWhereUniqueInput;
}

export { ProfilFindUniqueArgs as ProfilFindUniqueArgs };

import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

@InputType()
export class UserCreateInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsInt()
  role_id: number;

  @Field()
  @IsNotEmpty()
  @IsInt()
  user_state_id: number;
}

@InputType()
export class UserUpdateInput extends UserCreateInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  id: string;
}

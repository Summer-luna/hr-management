import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class RoleModel {
  @Field()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;
}

@ObjectType()
export class UserStateModel {
  @Field()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;
}

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => RoleModel)
  role: RoleModel;

  @Field(() => UserStateModel)
  user_state: RoleModel;
}

// @ObjectType()
// export class RoleModel {
//   @Field(() => ID)
//   id: string;
//
//   @Field(() => String)
//   name: string;
// }

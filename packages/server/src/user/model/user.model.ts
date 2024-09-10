import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Int)
  role_id: number;
}

// @ObjectType()
// export class RoleModel {
//   @Field(() => ID)
//   id: string;
//
//   @Field(() => String)
//   name: string;
// }

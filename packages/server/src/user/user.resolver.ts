import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserModel } from './model/user.model';
import { UserService } from './user.service';
import { UserCreateInput, UserUpdateInput } from './dto/user.dto';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserModel])
  async users(): Promise<UserModel[]> {
    return this.userService.users();
  }

  @Mutation(() => UserModel)
  async createUser(@Args('user') user: UserCreateInput): Promise<UserModel> {
    return this.userService.createUser(user);
  }

  @Mutation(() => UserModel)
  async updateUser(@Args('user') user: UserUpdateInput): Promise<UserModel> {
    return this.userService.updateUser(user);
  }
}

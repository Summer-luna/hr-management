import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma, User } from '@prisma/client';
import { UserCreateInput, UserUpdateInput } from './dto/user.dto';
import { UserModel } from './model/user.model';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async users(): Promise<UserModel[]> {
    return this.prismaService.user.findMany({
      include: {
        role: true,
        user_state: true,
      },
    });
  }

  async createUser(user: UserCreateInput): Promise<UserModel> {
    return this.prismaService.user.create({
      data: user,
      include: {
        role: true,
        user_state: true,
      },
    });
  }

  async updateUser(user: UserUpdateInput): Promise<UserModel> {
    const { id } = user;

    const isExist = await this.exists(id);

    if (!isExist) throw new Error('User not found');

    return this.prismaService.user.update({
      where: {
        id: id,
      },
      data: user,
      include: {
        role: true,
        user_state: true,
      },
    });
  }

  async exists(userId: string | undefined): Promise<boolean> {
    if (!userId) return false;

    const employeeCount = await this.prismaService.user.count({
      where: {
        id: userId,
      },
    });

    return employeeCount > 0;
  }

  async deleteUsers(userIds: string[]): Promise<Prisma.BatchPayload> {
    return this.prismaService.user.deleteMany({
      where: {
        id: { in: userIds },
      },
    });
  }
}

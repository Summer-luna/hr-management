import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';
import { UserCreateInput, UserUpdateInput } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async users(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async createUser(user: UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data: user,
    });
  }

  async updateUser(user: UserUpdateInput): Promise<User> {
    const { id } = user;

    const isExist = await this.exists(id);

    if (!isExist) throw new Error('User not found');

    return this.prismaService.user.update({
      where: {
        id: id,
      },
      data: user,
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
}

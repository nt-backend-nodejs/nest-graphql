import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput as LoginInput } from './dto/login.input'; // Ro'yxatdan o'tish uchun kirish ma'lumotlari
import * as bcrypt from 'bcrypt'; // Parolni shifrlash uchun
import { JwtService } from '@nestjs/jwt'; // JWT yaratish uchun

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  @Mutation(() => User)
  async signUp(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserInput.password, 10);
    createUserInput.password = hashedPassword;
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => String)
  async signIn(@Args('loginInput') loginInput: LoginInput): Promise<string> {
    const user = await this.usersService.findByEmail(loginInput.email);
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(loginInput.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return this.jwtService.sign({ id: user.id }); // JWT qaytariladi
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.usersService.findAll();
  }
}

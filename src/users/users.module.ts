import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { JwtModule } from "@nestjs/jwt";
import { User } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    User,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'your_secret_key', // O'zgartiring
      signOptions: { expiresIn: '1h' }, // JWT muddati
    }),
  ],

  providers: [UsersResolver, UsersService, User],
})
export class UsersModule { }

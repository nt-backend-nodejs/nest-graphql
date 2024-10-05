import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      secret: 'your_secret_key', // O'zgartiring
      signOptions: { expiresIn: '1h' }, // JWT muddati
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule { }

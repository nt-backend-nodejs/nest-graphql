import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/login.input';

@Injectable()
export class UsersService {
  private users: User[] = []; // Foydalanuvchilarni saqlash uchun vaqtinchalik xotira

  create(createUserInput: CreateUserInput): User {
    const newUser = { id: Date.now(), ...createUserInput };
    this.users.push(newUser);
    return newUser;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  findByEmail(email: string): User {
    return this.users.find(user => user.email === email);
  }

  update(id: number, updateUserInput: UpdateUserInput): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserInput };
      return this.users[userIndex];
    }
    return null;
  }

  remove(id: number): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      const deletedUser = this.users[userIndex];
      this.users.splice(userIndex, 1);
      return deletedUser;
    }
    return null;
  }
}





// import { Injectable } from '@nestjs/common';
// import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';

// @Injectable()
// export class UsersService {
//   create(createUserInput: CreateUserInput) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all users`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserInput: UpdateUserInput) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }

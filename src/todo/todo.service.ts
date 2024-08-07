import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 12345,
      name: 'ovqat pishirish',
    },
    {
      id: 123456,
      name: 'SOme task',
    },
    {
      id: 123456,
      name: 'SOme task',
    },
    {
      id: 123456,
      name: 'SOme task',
    },
    {
      id: 123456,
      name: 'SOme task',
    },
  ];

  create(createTodoInput: CreateTodoInput) {
    this.todos.push(createTodoInput);
    return createTodoInput;
  }

  async findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}

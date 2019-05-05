import { route, HttpMethod } from '@spksoft/koa-decorator';
import { BaseContext } from 'koa';

import Todo from '../models/todos';
@route('/todos')
class Todos {
  @route('/', HttpMethod.GET)
  async getTodos(ctx: BaseContext) {
    const todos = await Todo.find();
    ctx.body = todos;
  }
}

import { route, HttpMethod } from '@spksoft/koa-decorator';
import { BaseContext } from 'koa';

@route('/todos')
class Todos {
  @route('/', HttpMethod.GET)
  async getTodos(ctx: BaseContext) {
    return (ctx.body = []);
  }
}

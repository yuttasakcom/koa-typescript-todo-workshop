import 'reflect-metadata';
import * as Koa from 'koa';
import * as winston from 'winston';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import { resolve } from 'path';
import { load } from '@spksoft/koa-decorator';
import { logger } from './logging';

dotenv.config({ path: '.env' });

(<any>mongoose).Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/db_todos', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => {
    console.error('MongoDB connect fail ', err);
    process.exit(1);
  });

const port = process.env.PORT || 4000;
const app = new Koa();
const apiRoutes = load(resolve(__dirname, 'controllers'), '.controller.ts');

app.use(logger(winston));
app.use(apiRoutes.routes());
app.listen(port);

console.log(`Server running at http://localhost:${port}`);

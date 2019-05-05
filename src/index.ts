import 'reflect-metadata';
import { resolve } from 'path';
import Koa from 'koa';
import { load } from '@spksoft/koa-decorator';
import * as winston from 'winston';
import * as dotenv from 'dotenv';

import { logger } from './logging';

dotenv.config({ path: '.env' });

const port = process.env.PORT || 4000;
const app = new Koa();
const apiRoutes = load(resolve(__dirname, 'controllers'), '.controller.ts');

app.use(logger(winston));
app.use(apiRoutes.routes());
app.listen(port);

console.log(`Server running at http://localhost:${port}`);

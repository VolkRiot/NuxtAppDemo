import 'dotenv/config';
import Koa from 'koa';

// console.log(process.env.TEST_VARIABLE);

const app = new Koa();

app.use(async ctx => {
  ctx.body = "Hello World! Koa";
})

app.listen(3000);
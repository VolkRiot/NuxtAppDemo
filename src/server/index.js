import 'dotenv/config';
import Koa from 'koa';
import { Nuxt, Builder } from 'nuxt';

// console.log(process.env.TEST_VARIABLE);

const app = new Koa();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const config = require('../../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // config.srcDir = 'src/client/';
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  const builder = new Builder(nuxt);
  builder.build().catch(err => {
    console.error(err);
    process.exit(1);
  });

  app.use(async ctx => {
    ctx.status = 200;

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);

      nuxt.render(ctx.req, ctx.res, promise => {
        promise.then(resolve).catch(reject);
      });
    });
  });

  app.listen(port, host, () => {
    console.log(`Listening on port ${port} of ${host}`);
  });

}

start();

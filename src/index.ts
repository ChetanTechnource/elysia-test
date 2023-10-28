import { Elysia } from "elysia";
import { cron } from '@elysiajs/cron'
import { swagger } from '@elysiajs/swagger'
import { html } from '@elysiajs/html'
import { cookie } from '@elysiajs/cookie'
import { jwt } from '@elysiajs/jwt'
import { staticPlugin } from '@elysiajs/static'
import { PrismaClient } from '@prisma/client' 

const db = new PrismaClient() 

import routes from './Routes/route'



const app = new Elysia()
.decorate('db', db)
.use(staticPlugin())
.use(
  jwt({
      name: 'jwt',
      secret: 'Fischl von Luftschloss Narfidort'
  })
)
.use(cookie())
.use(swagger())
.use(html())
// .use(routes)
// .use(
//   cron({
//       name: 'heartbeat',
//       pattern: '*/10 * * * * *',
//       run() {
//           console.log('Heartbeat',Date.now())
//       }
//   })
// )
.use(routes)
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

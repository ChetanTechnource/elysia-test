
import { Elysia } from "elysia";
const routes = new Elysia()
    .get('/html', () => `
    <html lang="en">
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>  `
  )
  .get('/jsx', () => (
    `<html lang="en">
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>`
  ))
  .get("/", () => "Hello Elysia")
  .get("/test", () => "Hello TEST");

export default routes
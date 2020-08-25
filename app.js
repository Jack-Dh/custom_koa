import koa from "koa"
import router from "./router/index"
import bodyParser from 'koa-bodyparser'
import koaBady from "koa-body"
const app = new koa();
// app.use(bodyParser())

app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(koaBady({
  multipart: true,
  formidable: {
    maxFieldsSize: 200 * 1024 * 1024
  }
}))
app.use(router.home.routes(), router.home.allowedMethods())
app.use(router.login.routes(), router.login.allowedMethods())
app.use(router.user.routes(), router.user.allowedMethods())
app.use(router.imprt.routes(), router.imprt.allowedMethods())
app.use(router.query.routes(), router.query.allowedMethods())
app.listen(3009)

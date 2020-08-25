
import operation from "../../controllers/login/login"
const router = require("koa-router")({
    prefix: "/login"
})


// router.post("/", async (ctx, next) => {
//     const _num = new Date()
//     ctx.body = moment(_num).format("YYYY-MM-DD HH:mm:ss")
//     await next();
// })
router.post("/", operation.login)
router.post("/phone", operation.phone)
router.post("/add", operation.add)
router.get("/query", operation.query)
export default router
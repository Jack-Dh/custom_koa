const router = require("koa-router")({
    prefix: '/home'
})


router.get("/a", async (ctx, next) => {
    ctx.body = "koa err"
})

router.post("/add",async (ctx,next)=>{
    ctx.body="koa add"
})

export default router

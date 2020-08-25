import operation from "../../controllers/userInfo/userInfo";
const router = require("koa-router")({
    prefix: "/user"
})

router.post("/add", operation.add)

export default router
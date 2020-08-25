const router = require("koa-router")({
    prefix: "/query"
})
import query from "../../controllers/query/query"
router.get("/", query.queryAll)

export default router
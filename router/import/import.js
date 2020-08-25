import operation from "../../controllers/import/import";

const router = require("koa-router")({
    prefix: "/import"
})
router.post("/", operation.importFun)
export default router
import query from "../../modules/query"

export default class operation {
    //查询文件
    static async queryAll(ctx, next) {

        let _par = ctx.request.query
        const _query = await query.queryAll(_par)
        if (_par.limit) {
            ctx.body = {
                list: _query,
            }
        } else {
            ctx.body = {
                list: _query,
            }
        }
    }
}
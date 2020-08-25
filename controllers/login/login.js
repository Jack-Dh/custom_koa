import articles from "../../modules/login"

class operation {
    static async login(ctx, next) {
        try {
            let isList = await articles.login()
            if (isList) {
                return ctx.body = {
                    code: 200,
                    data: isList,
                    limt: isList.length
                }
            } else {
                return ctx.body = { code: 400, msg: "参数有误" }
            }
        } catch (error) {
            return ctx.body = { code: 500, msg: "服务器异常，请稍后重试" }
        }

    }
    static async phone(ctx, next) {
        let _msg = await articles.phone()
        ctx.body = { msg: _msg }

    }
    static async add(ctx, next) {
        let data = ctx.request.body
        if (data.title && data.author && data.content && data.category) {
            try {
                await articles.add(data)
                return ctx.body = { code: 200, msg: "添加成功" }
            } catch (error) {
                return ctx.body = { code: 500, msg: "服务器异常，请稍后重试", error: error }
            }
        }
        return ctx.body = { code: 400, msg: "参数填写不完全" }

    }
    static async query(ctx, next) {
        let listData = await articles.query()
        return ctx.body = { list: listData, limt: listData.length }
    }
}
// export default
module.exports = operation;
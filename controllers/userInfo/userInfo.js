
import users from "../../modules/user";
import request from "request"

const _request = (path, data) => {
    return new Promise((resolve, reject) => {
        request(path, function (error, response, body) {
            if (!error) {
                resolve(body)
            } else {
                reject(err)
            }
        })
    })
}
export default class operation {
    static async add(ctx, next) {
        let req = ctx.request.body
        let listdata = await _request("https://ywapi.yuewei007.com/yw/home/list")

        if (req.name && req.age) {
            let addUser = await users.add(ctx.request.body)
            if (addUser) {
                ctx.body = {
                    code: 200,
                    msg: "添加成功",
                    listdata: listdata
                }
            }
        } else {
            return ctx.body = { err: 400, msg: "用户信息填写不完整" }
        }
    }
}

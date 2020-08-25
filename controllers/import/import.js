import impot from "../../modules/import"

export default class operation {
    static async importFun(ctx, next) {
        //获取文件存在本地的信息
        const fileInfo = await impot.insert(ctx.request.files.file)
        ctx.body = {
            url: await impot.write(fileInfo),
            msg: "上传成功"
        }
    }
}
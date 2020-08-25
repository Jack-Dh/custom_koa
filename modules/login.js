// 引入mysql的配置文件
const db = require("../config/db");

//引入数据莫模型
const Article = db.import('../shema/article');
Article.sync({ force: false }); //自动创建表

class operation {
    static async login() {
        return await Article.findAll()
    }
    static async phone() {
        return "koa phonessss"
    }
    static async add(data) {
        return await Article.create({
            title: data.title,
            author: data.author,
            content: data.content,
            category: data.category
        })
    }
    static async query() {
        return await Article.findAll()
    }
}
// export default
module.exports = operation;
const db = require("../config/db")
const File = db.import("../shema/file")

export default class operation {
    static async queryAll(data) {
        return await File.findAll({
            limit: Number(data.limit),
            offset: 1
        })
    }
}
import db from "../config/db"

const User = db.import('../shema/users')

User.sync({ force: false, alter: true })

export default class operation {
    static async add(data) {
        return await User.create({
            name: data.name,
            age: data.age,
        })
    }
}
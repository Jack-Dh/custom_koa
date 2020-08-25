// 引入mysql的配置文件
const path = require('path');
const fs = require("fs")
const db = require("../config/db");
const File = db.import("../shema/file")

File.sync({ force: false, alter: true })


export default class operation {
    static async insert(file) {
        //文件存入本地
        return new Promise((resolve, reject) => {
            // 创建可读流
            const reader = fs.createReadStream(file.path);
            let filePath = path.join(__dirname, '../public/static') + `/${file.name}`;
            // 创建可写流
            const upStream = fs.createWriteStream(filePath);
            // 可读流通过管道写入可写流
            reader.pipe(upStream);

            upStream.on('error', (err) => {
                reject(err);
            });
            //文件已经就写入完成事件
            upStream.on('finish', () => {
                resolve({
                    url: upStream.path,
                    fileName: file.name
                })
            })

        }
        )
    }

    //写入数据库
    static async write(data) {
        return await File.create({
            url: data.url,
            fileName: data.fileName
        })
    }
}

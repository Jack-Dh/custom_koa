
export default (sequelize, DataTypes) => {
    return sequelize.define("file", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'url'
        },
        fileName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fileName'
        }, // 创建时间
        createdAt: {
            type: DataTypes.DATE
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE
        }
    });
}
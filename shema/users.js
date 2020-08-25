export default (sequelize, DataTypes) => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'age'
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE
        }
    })
}
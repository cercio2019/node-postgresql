const { Model, DataTypes, Sequelize } = require('sequelize');

const USERS_TABLE = 'users';

class Users extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USERS_TABLE,
            modelName: 'Users',
            timestamps: true
        }
    }
} 

const UsersSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'username'
    },
    
    email:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'email'
    } 
}
  
module.exports = { Users, UsersSchema };
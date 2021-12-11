const sequelize = require('../database/database');
const userInfo = require("../models/UserInfo");

class UserRepository {
    async GetAll() {
        return await sequelize.models.user.findAll();
    }

    async GetById(userId) {
        return await sequelize.models.user.findAll({
            where: {
                id: userId
            }
        })
    }

    async CreateOne(user, userInfo) {

        let role = await sequelize.models.role.findAll({
            where: {
                id: user.roleId
            }
        })

        user = await sequelize.models.user.create({
            login: user.login,
            password: user.password,
            createdAt: Date.now(),
            updateAt: Date.now()
        });

        await user.createUserInfo(userInfo);
        await user.addRole(role);

        return user;
    }

    async EditById() {

    }

    async DeleteById() {

    }
}

module.exports = new UserRepository();
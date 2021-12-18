const sequelize = require('../database/Database');
const UserInfo = require("../models/UserInfo");
const Op = require('sequelize').Op;

class UserRepository {
    async GetAll() {
        return await sequelize.models.user.findAll();
    }

    async GetById(userId) {
        let user = await sequelize.models.user.findOne({
            where: {
                id: userId
            }
        })
        let userInfo = await user.getUserInfo();

        return {...user.get(), ...userInfo.get()};
    }

    // Get Only ONE user with the specified fields
    // Send object with fields: {login: user.login, id: 10}
    async GetOneByQuery(query) {
        console.log(query)
        return await sequelize.models.user.findOne({
            include: [{
                model: UserInfo,
                as: 'UserInfo'
            }],
            where: query
        })
    }

    // Get Many users with the specified fields
    // Send array with object fields: [{id: 10}, {login: 'ds11d1s111d'}, {login: 'MrTester610'}]
    async GetAllByQuery(query) {
        return await sequelize.models.user.findAll({
            include: [{
                model: UserInfo,
                as: 'UserInfo'
            }],
            where: {
                [Op.or]: query
            }
        })
    }

    async Create(user, role, userInfo) {
        user = await sequelize.models.user.create(user);
        userInfo = await user.createUserInfo(userInfo);

        await user.addRole(role);
        userInfo['userId'] = undefined; // We already have id in 'user'
        return {...user.get(), ...userInfo.get()};
    }

    async EditById(userId, user, userInfo) {
        await sequelize.models.user.update(user, {
            where: {
                id: userId
            }
        });

        await sequelize.models.user_info.update(userInfo, {
            where: {
                userId: userId
            }
        });

        return await this.GetById(userId);
    }

    async DeleteById(userId) {
        await sequelize.models.user.destroy({
            where: {
                id: userId
            }
        })
    }
}

module.exports = new UserRepository();
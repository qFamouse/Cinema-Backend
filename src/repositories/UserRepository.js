const sequelize = require('../database/Database');
const UserInfo = require("../models/UserInfo");
const Op = require('sequelize').Op;


class UserRepository {
    async GetAll() {
        return await sequelize.models.user.findAll();
    }

    async GetById(userId) {
        return await sequelize.models.user.findOne({
            where: {
                id: userId
            }
        })
        // let userInfo = await user.getUserInfo();
        // return {...user.get(), ...userInfo.get()};
    }

    async GetDetailById(userId) {
        return await sequelize.models.user.findOne({
            include: { model: UserInfo, as: 'UserInfo' },
            where: { id: userId }
        })
    }

    // Get Only ONE user with the specified fields
    // Send object with fields: {login: user.login, id: 10}
    async GetOneByQuery(query) {
        return await sequelize.models.user.findOne({ where: query })
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
        return await sequelize.transaction(
            async (t) => {
                user = await sequelize.models.user.create(user, { transaction: t });
                userInfo = await user.createUserInfo(userInfo, { transaction: t });
                await user.addRole(role, {transaction: t});

                userInfo['userId'] = undefined; // We already have id in 'user'
                return {...user.get(), ...userInfo.get()};
            }
        )
    }

    async EditById(userId, user) {
        return await sequelize.models.user.update(user, {
            where: {
                id: userId
            }
        });
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
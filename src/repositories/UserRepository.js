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

        if (role.length !== 1) {
            throw "Role not found";
        }

        user = await sequelize.models.user.create({
            login: user.login,
            password: user.password
        });

        await user.createUserInfo({
            avatar: userInfo.avatar ?? null,
            firstName: userInfo.firstName,
            birthday: userInfo.birthday,
            email: userInfo.email,
            phone: userInfo.phone ?? null,
            registerAt: Date.now(),
            lastVisitAt: Date.now(),
            updateAt: Date.now()
        });

        await user.addRole(role);

        return user;
    }

    async EditById(userId, user, userInfo) {
        user = await sequelize.models.user.update({
            login: user.login,
            password: user.password ?? undefined
        }, {
            where: {
                id: userId
            }
        });

        await sequelize.models.user_info.update({
            avatar: userInfo.avatar,
            firstName: userInfo.firstName,
            birthday: userInfo.birthday,
            email: userInfo.email,
            phone: userInfo.phone,
            // registerAt: Date.now(),
            // lastVisitAt: Date.now(),
            updateAt: Date.now()
        }, {
            where: {
                userId: userId
            }
        });

        // Get data for return //
        user = await sequelize.models.user.findOne({
            where: {
                id: userId
            }
        })
        userInfo = await user.getUserInfo();

        userInfo['userId'] = undefined; // We already have id in 'user'
        return {...user.get(), ...userInfo.get()};
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
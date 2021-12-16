const sequelize = require('../database/Database');

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
const sequelize = require('../database/Database');
const UserInfo = require("../models/UserInfo");

class UserInfoRepository {
    async GetAll() {
        return await sequelize.models.user_info.findAll();
    }

    async GetByUserId(userId) {
        return await sequelize.models.user_info.findOne({
            where: {
                userId: userId
            }
        })
    }

    async Create(userInfo) {
        return sequelize.models.user_info.create(userInfo)
    }

    async EditByUserId(userId, userInfo) {
        await sequelize.models.user_info.update(userInfo, {
            where: {
                userId: userId
            }
        });

        return await this.GetByUserId(userId);
    }

}

module.exports = new UserInfoRepository();
const sequelize = require('../database/database');

class RoleRepository {
    async GetAll() {
        return await sequelize.models.role.findAll();
    }

    async GetById(userId) {
        return await sequelize.models.role.findOne({
            where: {
                id: userId
            }
        });
    }

    async CreateOne(role) {
        return await sequelize.models.role.create({
            name: role.name
        })
    }

    async EditById(roleId, role) {
        await sequelize.models.role.update({
            name: role.name
        }, {
            where: {
                id: roleId
            }
        });

        // Get data for return //
        return await this.GetById(roleId);
    }

    async DeleteById(roleId) {
        await sequelize.models.role.destroy({
            where: {
                id: roleId
            }
        });
    }
}

module.exports = new RoleRepository();
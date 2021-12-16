const sequelize = require('../database/database');

class RoleRepository {
    async GetAll() {
        return await sequelize.models.role.findAll();
    }

    async GetById(roleId) {
        return await sequelize.models.role.findOne({
            where: {
                id: roleId
            }
        });
    }

    async Create(role) {
        return sequelize.models.role.create(role)
    }

    async EditById(roleId, role) {
        await sequelize.models.role.update(role, {
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
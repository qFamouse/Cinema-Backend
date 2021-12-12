const roleRepository = require('../repositories/RoleRepository');

class RolesService {
    async GetAll() {
        return await roleRepository.GetAll();
    }
    async GetById(roleId) {
        return await roleRepository.GetById(roleId);
    }

    async CreateOne(role) {
        return await roleRepository.CreateOne(role);
    }

    async EditById(roleId, role) {
        return await roleRepository.EditById(roleId, role);
    }

    async DeleteById(roleId) {
        return await roleRepository.DeleteById(roleId);
    }
}

module.exports = new RolesService();
const userRepository = require('../repositories/UserRepository');
const roleRepository = require('../repositories/RoleRepository');
const crypt = require("../utils/Crypt");

class UserService {
    async GetAll() {
        return await userRepository.GetAll();
    }
    async GetById(userId) {
        return await userRepository.GetById(userId);
    }

    async Create(user, userInfo) {
        // Check to exist role
        let role = await roleRepository.GetById(user.roleId);

        if (role === null) {
            throw "Role not found"
        }
        // Hashing the password
        user.password = await crypt.CryptPassword(user.password);

        return await userRepository.Create(user, role, userInfo);
    }

    async EditById(userId, user, userInfo) {
        // If password is not null, then it is supposed that we want to change it
        if (user.password) {
            user.password = await crypt.CryptPassword(user.password);
        }
        return await userRepository.EditById(userId, user, userInfo);
    }

    async DeleteById(userId) {
        await userRepository.DeleteById(userId);
    }
}

module.exports = new UserService();
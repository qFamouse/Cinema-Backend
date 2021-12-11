const userRepository = require('../repositories/UserRepository');
const crypt = require("../utils/Crypt");

class UsersService {
    async GetAll() {
        return await userRepository.GetAll();
    }
    async GetById(userId) {
        return await userRepository.GetById(userId);
    }

    async CreateOne(user, userInfo) {
        // Hashing the password
        user.password = await crypt.CryptPassword(user.password);

        return await userRepository.CreateOne(user, userInfo);
    }
}

module.exports = new UsersService();
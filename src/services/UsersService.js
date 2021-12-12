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

module.exports = new UsersService();
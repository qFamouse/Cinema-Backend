const userRepository = require('../repositories/UserRepository');
const roleRepository = require('../repositories/RoleRepository');
const crypt = require("../utils/Crypt");
const UserConfig = require('../config/ModelsConfig.json');
const AuthConfig = require('../config/AuthConfig.json');
const jwt = require('jwt-simple');

class UserService {
    async GetAll() {
        return await userRepository.GetAll();
    }
    async GetById(userId) {
        return await userRepository.GetById(userId);
    }

    async Create(user, userInfo) {
        // Check to exist role
        let role = await roleRepository.GetById(UserConfig.Users.DefaultRole);

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

    async Login(user) {
        const password = user.password;
        user = await userRepository.GetOneByQuery({login: user.login});

        if (!user) {
            throw 'No such user'
        }

        if (!crypt.ValidatePassword(password, user.password)) {
            throw 'Bad password'
        }

        let payload = {
            userId: user.id,
        }

        let token = jwt.encode(payload, AuthConfig.SecretKey);

        return {token: token};
    }
}

module.exports = new UserService();
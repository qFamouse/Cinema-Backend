// Repositories //
const userRepository = require('../repositories/UserRepository');
const userInfoRepository = require('../repositories/UserInfoRepository');
const roleRepository = require('../repositories/RoleRepository');
// Password Encryption //
const crypt = require("../utils/Crypt");
const jwt = require('jwt-simple');
// Configs //
const UserConfig = require('../config/ModelsConfig.json');
const AuthConfig = require('../config/AuthConfig.json');
// Errors //
const NotFoundError = require('../Errors/NotFoundError');
const UnauthorizedError = require('../Errors/UnauthorizedError');

class UserService {
    async GetAll() {
        return await userRepository.GetAll();
    }

    async GetDetailById(userId) {
        let user = await userRepository.GetById(userId);

        if (!user) {
            throw new NotFoundError("No such user");
        }

        let userInfo = await userInfoRepository.GetByUserId(userId);
        userInfo.userId = undefined; // Hide redundant parameter

        return {...user.get(), ...userInfo.get()};
    }

    async Register(user, userInfo) {
        let role = await roleRepository.GetById(UserConfig.Users.DefaultRole);
        if (role === null) {
            throw new Error("Role not found");
        }

        // Hashing the password
        user.password = await crypt.CryptPassword(user.password);

        return await userRepository.Create(user, role, userInfo);
    }

    async Login(user) {
        const password = user.password;
        user = await userRepository.GetOneByQuery({login: user.login});

        if (!user) {
            throw new NotFoundError('No such user');
        }

        if (!crypt.ValidatePassword(password, user.password)) {
            throw new UnauthorizedError('Bad password') // 401 : RFC 7235
        }

        let payload = {
            userId: user.id,
        }

        let token = jwt.encode(payload, AuthConfig.SecretKey);

        return { token: token };
    }

    async EditById(userId, user, userInfo) {
        if (user) {
            // If password is not null, then it is supposed that we want to change it
            if (user.password) {
                user.password = await crypt.CryptPassword(user.password);
            }
            await userRepository.EditById(userId, user);
        }

        if (userInfo) {
            await userInfoRepository.EditByUserId(userId, userInfo);
        }

        return await userRepository.GetDetailById(userId);
    }

    async DeleteById(userId) {
        await userRepository.DeleteById(userId);
    }
}

module.exports = new UserService();
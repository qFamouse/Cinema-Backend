const bcrypt = require('bcrypt');

exports.CryptPassword = async function(password) {
    let salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(password, salt);
}
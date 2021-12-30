const HttpStatusCodeError = require("../Errors/HttpStatusCodeError");

class UnauthorizedError extends HttpStatusCodeError {
    constructor(message) {
        super(message, 401);
    }
}

module.exports = UnauthorizedError;
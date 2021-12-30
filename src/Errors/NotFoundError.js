const HttpStatusCodeError = require("../Errors/HttpStatusCodeError");

class NotFoundError extends HttpStatusCodeError {
    constructor(message) {
        super(message, 404);
    }
}

module.exports = NotFoundError;
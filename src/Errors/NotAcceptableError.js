const HttpStatusCodeError = require("../Errors/HttpStatusCodeError");

class NotAcceptableError extends HttpStatusCodeError {
    constructor(message) {
        super(message, 406);
    }
}

module.exports = NotAcceptableError;
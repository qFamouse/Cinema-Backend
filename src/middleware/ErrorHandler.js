const Response = require("../utils/Response");
const HttpStatusCodeError = require("../Errors/HttpStatusCodeError");

module.exports = (error, req, res, next) => {
    if (error instanceof HttpStatusCodeError) {
        res.status(error.status || 500).json(new Response(error.message, error.status || 500));
    }
    else {
        res.status(500).json(new Response("Internal Server Error", 500));
    }
}
module.exports = (scheme) => {
    return (req, res, next) => {
        const { error, value } = scheme.validate(req.body);

        if (error) {
            res.status(400);
            res.send(error.details[0].message);
        }
        else {
            req.body = value;
            next();
        }
    }
}
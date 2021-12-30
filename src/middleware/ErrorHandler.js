module.exports = (error, req, res, next) => {
    console.log(error.message);
    res.send({
        Error : error.message
    });
}
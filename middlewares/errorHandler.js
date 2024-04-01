const errorHandler = (err, req, res, next) => {
    let statusCode = err.status || 500;
    let message = err.message || "Internal Server Error";

    console.error(err.stack);

    res.status(statusCode).json({
        success: false,
        error: message,
    });
};

module.exports = errorHandler;

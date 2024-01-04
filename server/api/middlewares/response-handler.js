module.exports.responseHandler = (data, res, message, status) => {
    const statusCode = status || 200;
    res.status(statusCode).json({
        status: statusCode || 200,
        message: message || 'Success',
        data: data
    })
}

module.exports.errorHandler = (message, res, status) => {
    const statusCode = status || 400;
    res.status(statusCode).json({
        status: 'error',
        message: message || `Error`
    })
}
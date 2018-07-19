module.exports = function(err, req, res, next) {
    let { status = 500, message = 'Ошибка сервера'} = err

    return res
        .status(status)
        .json({ message })
}
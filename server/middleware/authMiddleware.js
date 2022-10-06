const jwt = require('jsonwebtoken')

// https://www.youtube.com/watch?v=H2GCkRF9eko&list=PL4P0ACtmbHTkjdbwJzxDvJfQNxLEiJ6Fh&index=1&t=44s
// в 1:10:00 объясняется, как подключать токен к запросу
// в 45:14 добавляет в базу инфу
module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer token_body
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
};

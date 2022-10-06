// туториал видео https://www.youtube.com/watch?v=H2GCkRF9eko&list=PL4P0ACtmbHTkjdbwJzxDvJfQNxLEiJ6Fh&index=4&t=44s
require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors') // нужен для запросов из браузера
const fileUpload = require('express-fileupload') // чтобы работать с файлами
const router = require('./routes/index') // объявляем основной путь, который свзязывает все остальные
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json()) // чтобы приложение могло парсит формат json
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
/*app.get('/', (req, res) => {
    res.status(200).json({message: 'working!!!'})
})*/
// Обработка ошибок, последний Middleware
// Middleware который работает с ошибками обязательно должен идти
// и регистрироваться в самом конце
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()

// добавляем в бд объекты
// методы get post описаны и typeRouter, который вызывает этот файл
const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types) // важно именно вернуть json
    }

}

module.exports = new TypeController()

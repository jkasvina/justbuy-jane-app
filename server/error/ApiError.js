// обработка ошибок
class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
// статические функции можно вызывать без создания объекта класса -
// то есть можно обратиться к классу и вызвать ту или иную ф-ю

    // неправильный запрос
    static badRequest(message) {
        return new ApiError(404, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }
    // когда доступа нет
    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError

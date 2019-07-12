const pg = require('./db/postgresql').create()

module.exports = {
    create: function () {
        return new Grupo()
    }
}

/**
 * CRUD DE TAREAS
 */
class Grupo {
    constructor() {

    }

    async getAll() {
        let sql = `SELECT * FROM public.grupos`;
        let response = await pg.executeRows(sql)
        return response
    }

    async getOne(id) {
        let sql = `SELECT * FROM public.grupos WHERE id=${id}`;
        let response = await pg.executeRows(sql)
        return response
    }

    async getPorGenero(genero) {
        let sql = `SELECT * FROM public.grupos WHERE genero1=${genero} OR genero2=${genero}`;
        let response = await pg.executeRows(sql)
        return response
    }

    async getPorCiudad(ciudad) {
        let sql = `SELECT * FROM public.grupos WHERE ciudad=${ciudad}`;
        let response = await pg.executeRows(sql)
        return response
    }

    async getPorPrecio(precio) {
        let sql = `SELECT * FROM public.grupos WHERE precio<=${precio}`;
        let response = await pg.executeRows(sql)
        return response
    }

}
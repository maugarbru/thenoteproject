const service = require('../services/grupos').create()

module.exports = {
    create: function () {
        return new Grupo()
    }
}

class Grupo {
    constructor() {

    }

    async getAll() {
        let grupos = await service.getAll()
        return grupos
    }

    async getAllAdmin() {
        let grupos = await service.getAllAdmin()
        return grupos
    }


    async getOne(id) {
        let grupo = await service.getOne(id)
        return grupo
    }

    async getPorGenero(genero) {
        let grupos = await service.getPorGenero(genero)
        return grupos
    }

    async getPorCiudad(ciudad) {
        let grupos = await service.getPorCiudad(ciudad)
        return grupos
    }

    async getPorPrecio(precio) {
        let grupos = await service.getPorPrecio(precio)
        return grupos
    }

    async insert(id, nombre, descripcion, email, genero1, genero2, ciudad, precio, foto, video, pagina) {
        return await service.insert(id, nombre, descripcion, email, genero1, genero2, ciudad, precio, foto, video, pagina)
    }

    async delete(id) {
        return await service.delete(id)
    }
}
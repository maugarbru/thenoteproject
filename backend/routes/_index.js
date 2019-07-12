//Importar libreria
var express = require('express')
//Inicializar libreria
var app = express.Router()

app.use('/', require('./grupos'))

app.use(function (req, res, next) {
    res.status(404).send(
        {
            success: false,
            message: 'No encontrado'
        })

})

module.exports = app
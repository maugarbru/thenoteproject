//Importar libreria
var express = require('express')
//Inicializar libreria
var app = express.Router()

const controller = require('../controllers/grupos').create()

// Obtener todos las grupos
app.get('/grupos/', function (req, res) {
    controller.getAll().then(response => {
        res.status(200).send(response)
    }).catch(error => {
        console.log(error);
    })
})

// Obtener un grupo por id
app.get('/grupos/:id', function (req, res) {
    controller.getOne(req.params.id).then(response => {
        res.status(200).send(response)
    }).catch(error => {
        console.log(error);
    })
})

// Obtener grupos por genero
app.get('/grupos/genero/:genero', function (req, res) {
    controller.getPorGenero(req.params.genero).then(response => {
        res.status(200).send(response)
    }).catch(error => {
        console.log(error);
    })
})

// Obtener grupos por ciudad
app.get('/grupos/ciudad/:ciudad', function (req, res) {
    controller.getPorCiudad(req.params.ciudad).then(response => {
        res.status(200).send(response)
    }).catch(error => {
        console.log(error);
    })
})

// Obtener grupos por precio
app.get('/grupos/precio/:precio', function (req, res) {
    controller.getPorPrecio(req.params.precio).then(response => {
        res.status(200).send(response)
    }).catch(error => {
        console.log(error);
    })
})

module.exports = app

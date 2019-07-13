//Importar libreria
const nodemailer = require('nodemailer')
var express = require('express')
//Inicializar libreria
var app = express.Router()

const controller = require('../controllers/grupos').create()
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lanotabacanatest@gmail.com',
        pass: 'adminlanota'
    }
})

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

// Enviar email de inscripcion
app.post('/sendemail', function (req, res) {
    let body = req.body

    let mailOptions = {
        from: 'lanotabacanatest@gmail.com',
        to: 'lanotabacanatest@gmail.com',
        subject: body.subject,
        text: body.text
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send({ error: error })
        } else {
            res.status(200).send({ message: 'Email sent succesful' })
        }
    })
})

module.exports = app

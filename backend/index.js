//Importar libreria
var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')
//Inicializar libreria
var app = express()

app.use(bodyparser.json())
app.use(express.static('../frontend'))
app.use(express.urlencoded({
    extended: false
}))

app.use(cors())
app.use('/', require('./routes/_index'))

var port = 3000
//Inicializar el servidor del API donde se va a ejecutar
app.listen(port, () => {
    console.log(`Mi Api se esta ejecutando http://localhost:${port}`)
})

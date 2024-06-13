// Including Dependencies
const express = require('express') // Requerir Framework Express de Node.js
const dotenv = require("dotenv").config(); // Cargar el archivo .ENV
const bodyPaser = require('body-parser') // Permite leer el Cuerpo para analizarlo en un objeto Json
const morgan = require('morgan') // Middleware que informa sobre las peticiones al servidor
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');

// Initializations
const app = express() // Instancia de Express

// Settings
app.set('port', process.env.PORT || 4000) // Se setea el puerto, toma 4000 si no está configurado en ENV

// Middlewares
app.use(bodyPaser.urlencoded({extended:false})) // Para recibir datos desde un formulario
app.use(bodyPaser.json()) // Para que el servidor pueda recibir formato Json
app.use(morgan('dev')) // La opción dev da la información principal. Combined da más detalle
app.use(cors())

// Routes

// Api Routes

app.get('/', (req, res) => { // req=>request: llegan los datos al server
    // req=>response: se envían los datos hacia el cliente
    res.send({Title:'Hello CRONODE!'})
});

// Starting the Server
app.listen(app.get('port'), ()=>{ // Se inicia el servidor en el puerto configurada
    console.log(`Server running o localhost:${app.get('port')} `)
});
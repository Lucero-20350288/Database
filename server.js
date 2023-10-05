const express = require('express');
const usersRouter = require('./Routes/users');

class Server{
    constructor() {
        this.app = express(); //Se instancia Express 
        this.port = 3000;     // Definimos el puerto

        //Paths     http://localhost:3000/api/v1
        this.basePath = '/api/v1'; //Ruta Base
        this.usersPath = `${this.basePath}/users`; //Path para la tabla Users

        this.middlewares();   //Invocación de los middlewares

        this.routes(); //Invocación de las rutas
    }

    middlewares() {
        this.app.use(express.json()); //Para poder interpretar texto en formato JSON
    }

    routes() {
        this.app.use(this.usersPath, usersRouter); //EndPoint de Users
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server listening on port" + this.port)
        });
    }
}
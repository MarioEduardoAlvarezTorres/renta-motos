const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = "/zynch/usuario";
    this.motosRoutePath = "/zynch/moto";
    // CONECTAR
    this.conectarDB();
    // MIDDLEWARES
    this.middlewares();
    // ROUTES
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosRoutePath, require("../routes/usuario.route"));
    this.app.use(this.motosRoutePath, require("../routes/moto.route"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto ", this.port);
    });
  }
}

module.exports = Server;

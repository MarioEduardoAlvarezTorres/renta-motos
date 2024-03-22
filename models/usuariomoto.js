const { Schema, model } = require("mongoose");

const UsuarioMotoSchema = Schema({
  idMoto: { type: String, unique: true, required: true },
  idUsuario: { type: String, required: true },
  Bateria1: { type: String, unique: true },
  Bateria2: { type: String, unique: true },
});

module.exports = model("UsuarioMoto", UsuarioMotoSchema, "usuariomoto");

const { Schema, model } = require("mongoose");

const MotoSchema = Schema({
  idMoto: { type: String, unique: true, required: true },
  modelo: { type: String, required: true },
  codigoMotor: { type: String, unique: true },
  color: { type: String },
});

module.exports = model("Moto", MotoSchema);

const { response } = require("express");
const Usuario = require("../models/usuario");
const Moto = require("../models/moto");
const UsuarioMoto = require("../models/usuariomoto");

const usuarioGet = async (req, res = response) => {
  try {
    const { nombre, telefono, email } = req.query;

    let filtroUsuario = {};
    if (nombre) {
      const partesNombre = nombre.trim().split(/\s+/);
      const regexNombre = partesNombre.map((part) => `(?=.*${part})`).join("");
      filtroUsuario.nombre = { $regex: new RegExp("^" + regexNombre, "i") };
    } else if (telefono) {
      filtroUsuario.telefono = telefono;
    } else if (email) {
      filtroUsuario.email = email;
    }

    const usuario = JSON.parse(
      JSON.stringify(await Usuario.findOne(filtroUsuario))
    );

    if (!usuario) {
      return res
        .status(404)
        .json({ ok: false, message: "Usuario no encontrado" });
    }

    const usuarioMotos = await UsuarioMoto.find({
      idUsuario: usuario.idUsuario,
    });

    const motos = [];
    for (const usuarioMoto of usuarioMotos) {
      const moto = await Moto.findOne({ idMoto: usuarioMoto.idMoto });

      motos.push({
        idMoto: moto.idMoto,
        moto: moto.codigoMotor,
        bateria1: usuarioMoto.Bateria1,
        bateria2: usuarioMoto.Bateria2,
      });
    }

    res.json({
      ok: true,
      usuario: usuario.nombre,
      motos: motos,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ ok: false, message: "Error al obtener los datos del usuario" });
  }
};

const usuarioPost = async (req, res = response) => {
  try {
    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();
    res.json({
      msg: usuario,
    });
  } catch (error) {
    console.error(error);
  }
};

const usuarioPut = (req, res = response) => {
  res.json({
    msg: "Put API - controlador",
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "Delete API - controlador",
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
};

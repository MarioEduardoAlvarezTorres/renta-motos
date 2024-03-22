const { response } = require("express");

const motoGet = (req, res = response) => {
  res.json({
    msg: "Get API - controlador",
  });
};

const motoPost = (req, res = response) => {
  res.json({
    msg: "Post API - controlador",
  });
};

const motoPut = (req, res = response) => {
  res.json({
    msg: "Put API - controlador",
  });
};

const motoDelete = (req, res = response) => {
  res.json({
    msg: "Delete API - controlador",
  });
};

module.exports = {
  motoGet,
  motoPost,
  motoPut,
  motoDelete,
};

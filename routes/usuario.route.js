const { Router } = require("express");
const router = Router();

const {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
} = require("../controllers/usuario.controller");

router.get("/", usuarioGet);

router.post("/", usuarioPost);

router.put("/", usuarioPut);

router.delete("/", usuarioDelete);

module.exports = router;

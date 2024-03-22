const { Router } = require("express");
const router = Router();

const {
  motoGet,
  motoPost,
  motoPut,
  motoDelete,
} = require("../controllers/moto.controller");

router.get("/", motoGet);

router.post("/", motoPost);

router.put("/", motoPut);

router.delete("/", motoDelete);

module.exports = router;

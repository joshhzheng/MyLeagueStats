const express = require("express");
const router = express.Router();
const {
  getIcon,
} = require("../controllers/iconController");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const heros = await getIcon(id);
  res.send(heros);
});

module.exports = router;
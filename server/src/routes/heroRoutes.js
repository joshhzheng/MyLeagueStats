const express = require("express");
const router = express.Router();
const {
  getHero,
} = require("../controllers/heroController");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const heros = await getHero(id);
  res.send(heros);
});

module.exports = router;


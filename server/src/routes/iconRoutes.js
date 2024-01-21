const express = require("express");
const router = express.Router();
const {
  getIcon,
} = require("../controllers/iconController");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const icons = await getIcon(id);
  res.send(icons);
});

module.exports = router;
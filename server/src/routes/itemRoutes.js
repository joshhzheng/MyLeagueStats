const express = require("express");
const router = express.Router();
const {
  getItem,
} = require("../controllers/itemController");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const items = await getItem(id);
  res.send(items);
});

module.exports = router;


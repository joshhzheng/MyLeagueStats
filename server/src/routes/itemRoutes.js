const express = require("express");
const router = express.Router();
const {
  getItem,
  getItems,
} = require("../controllers/itemController");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const items = await getItem(id);
  res.send(items);
});

router.get("/getitems", async (req, res) => {
  const itemArr = req.body.itemArr;
  console.log(req.body.itemArr)
  const items = await getItems(itemArr);
  res.send(items);
});

module.exports = router;


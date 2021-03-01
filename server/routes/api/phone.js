const express = require("express");
const cors = require("cors");
const fs = require("fs");
const uuid = require("uuid");
const router = express.Router();

router.get("/", cors(), (req, res) => {
  res.set("Cache-Control", "public, max-age=31557600, s-maxage=31557600");
  const data = fs.readFileSync("./phone.json", "utf8");
  res.json(JSON.parse(data));
});

router.post("/add", cors(), (req, res) => {
  const data = fs.readFileSync("./phone.json", "utf8");
  let phoneAdd = [...JSON.parse(data)];

  req.body.id = uuid.v4();
  req.body.imageFileName = "phone.jpg";
  phoneAdd.push(req.body);
  write(phoneAdd, res, phoneAdd);
});

router.get("/delete/:id", cors(), (req, res) => {
  const data = fs.readFileSync("./phone.json", "utf8");
  let phoneDelete = [...JSON.parse(data)];
  phoneDelete = phoneDelete.filter((e) => e.id != req.params.id);
  write(phoneDelete, res, phoneDelete);
});

router.post("/edit", cors(), (req, res) => {
  const data = fs.readFileSync("./phone.json", "utf8");
  let phoneEdit = [...JSON.parse(data)];
  let idx = phoneEdit.findIndex((obj) => obj.id == req.body.id);
  req.body.id = phoneEdit[idx].id;
  phoneEdit[idx] = req.body;

  write(phoneEdit, res, req.body);
});

router.get("/:id", cors(), (req, res) => {
  const data = fs.readFileSync("./phone.json", "utf8");
  let phoneGet = [...JSON.parse(data)];
  res.json(phoneGet.filter((e) => e.id == req.params.id));
});

const write = (data, res, returnData) => {
  fs.writeFile("./phone.json", JSON.stringify(data), "utf8", (err) => {
    if (err) {
      throw err;
    }
    res.json(returnData);
  });
};

module.exports = router;

const express = require("express");
const phone = require("./phone.json");
const cors = require("cors");
const fs = require("fs");
const uuid = require("uuid");
const router = express.Router();

router.get("/", cors(), (req, res) => {
  res.set("Cache-Control", "public, max-age=31557600, s-maxage=31557600");
  res.json(phone);
});

router.post("/add", cors(), (req, res) => {
  let phoneAdd = [...phone];

  req.body.id = uuid.v4();
  req.body.imageFileName = "phone.jpg";
  phoneAdd.push(req.body);
  write(phoneAdd, res, phoneAdd);
});

router.get("/delete/:id", cors(), (req, res) => {
  let phoneDelete = [...phone];
  phoneDelete = phoneDelete.filter((e) => e.id != req.params.id);
  write(phoneDelete, res, phoneDelete);
});

router.post("/edit", cors(), (req, res) => {
  let phoneEdit = [...phone];
  let idx = phoneEdit.findIndex((obj) => obj.id == req.body.id);
  req.body.id = phoneEdit[idx].id;
  phoneEdit[idx] = req.body;

  write(phoneEdit, res, req.body);
});

router.get("/:id", cors(), (req, res) => {
  let phoneGet = [...phone];
  res.json(phoneGet.filter((e) => e.id == req.params.id));
});

const write = (data, res, returnData) => {
  fs.writeFile(
    "./routes/api/phone.json",
    JSON.stringify(data),
    "utf8",
    (err) => {
      if (err) throw err;
      res.json(returnData);
    }
  );
};

module.exports = router;

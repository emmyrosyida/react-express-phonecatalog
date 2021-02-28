const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options("*", cors());

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

app.use("/images", express.static("public/images"));
app.use("/api/phone", require("./routes/api/phone"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

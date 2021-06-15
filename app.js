const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT, connectDB } = require("./config");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//list of main routes
app.use("/", require("./routes"));
app.use("/api/form", require("./routes/biodata-activity"));

//routes not found
app.use("*", require("./routes/404-notfound"));

if (connectDB) {
  module.exports = app.listen(PORT, () => {
    console.log(`This app running on port ${PORT}`);
  });
}

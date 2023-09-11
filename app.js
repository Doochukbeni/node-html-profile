const express = require("express");

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});
app.all("*", (req, res) => {
  res.status(404).send("<h1> this page does not exist </h1>");
});

app.listen(3000, () => {
  console.log("app is connected on port 3000");
});

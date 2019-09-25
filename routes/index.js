var express = require("express");
var router = express.Router();
var net = require("net");
var fs = require("fs");

const client = net.createConnection(9090, "localhost", () => {
  console.log("CLIENT: connected");
});

client.on("data", data => {
  console.log(data);
  fs.writeFile("test.jpg", data, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
  client.end();
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index.html");
});

router.post("/", function(req, res, next) {
  client.write("Estoy Listo para recibir archivos");
  res.send("Message sended");
});

module.exports = router;
module.exports = router;

const net = require("net");
const fs = require("fs");

const server = net.createServer(socket => {
  console.log("SERVER: new client");

  socket.on("data", data => {
    console.log("" + data);
    fs.readFile("img.jpg", (err, data) => {
      if (err) throw err;
      console.log("archivo:" + data);
      socket.write(data);
    });
  });

  socket.on("end", () => {
    console.log("SERVER: client left");
  });
});

server.listen(9090, () => {
  console.log("SERVER: Running server on:", server.address().port);
});

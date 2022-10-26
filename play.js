const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.on("connect", () => {
    console.log("connection succesful")
  })

  conn.on("data", (data) => {
    console.log("Server says", data)
  })

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
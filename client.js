const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("connect", () => {
    console.log("connection succesful")
  })

  conn.on("data", (data) => {
    console.log("Server says", data)
  })

  conn.setEncoding("utf8");

  return conn;
}


  module.exports = {
    connect,
  };
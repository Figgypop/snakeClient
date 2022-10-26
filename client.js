const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("connect", () => {
    console.log("connection succesful");
    conn.write("Name: Fig");
    // setTimeout( () => conn.write("Move: up"), 400)
    // setTimeout( () => conn.write("Move: left"), 800)
    // setTimeout( () => conn.write("Move: down"), 1200)
    // setTimeout( () => conn.write("Move: right"), 1600)
  });
  
  conn.on("data", (data) => {
    console.log("Server says", data)
  });

  conn.setEncoding("utf8");

  return conn;
};


module.exports = {
  connect
};
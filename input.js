const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);  
  return stdin;
};


const handleUserInput = function (char) {
  if (char === 'x') {
    process.exit()
  }
  if (char === 'w') {
    console.log('Move: up')
  }
  if (char === 'a') {
    console.log('Move: left')
  }
  if (char === 's') {
    console.log('Move: down')
  }
  if (char === 'd') {
    console.log('Move: right')
  }
};

setupInput();

module.exports = {
  setupInput
}
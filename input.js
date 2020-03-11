let connection;

const handleUserInput = (stdin) => {
  stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      console.log("up");
      connection.write("Move: up");
    }
    if (key === "a") {
      console.log("left");
      connection.write("Move: left");
    }
    if (key === "s") {
      console.log("down");
      connection.write("Move: down");
    }
    if (key === "d") {
      console.log("right");
      connection.write("Move: right");
    }
  });
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  handleUserInput(stdin, connection);
  stdin.resume();
  return stdin;
};

module.exports = {
  setupInput
};
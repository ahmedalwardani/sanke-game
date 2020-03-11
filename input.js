const handleUserInput = (stdin) => {
  stdin.on("data", (key) => {
    // process.stdout.write(key);
    if (key === "\u0003") {
      process.exit();
    }
  });
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  handleUserInput(stdin);
  stdin.resume();
  return stdin;
};

module.exports = {
  setupInput
};
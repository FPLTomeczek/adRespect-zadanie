const path = require("path");

module.exports = {
  entry: ["./src/navbar.js", "./src/projects.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
};

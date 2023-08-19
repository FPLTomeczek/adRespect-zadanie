const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/navbar.js", "./src/projects.js", "./src/hero.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};

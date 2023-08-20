const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "development",
  entry: toObject(glob.sync(".src/logic/*.js*")),
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

function toObject(paths) {
  var ret = {};

  paths.forEach(function (path) {
    ret[path.split("/").slice(-1)[0]] = path;
  });

  return ret;
}

const path = require("path");

module.exports = {
    mode: "development",
    entry: "./js/index.js",
    output: {
        filename: "app-bundle.js",
        path: path.resolve(__dirname, "dist")
    },
}
/* eslint-env node */
const config = require("../config.js");
const del = require("del");
var clean;

clean = async () => {
  await del("./*", { cwd: config.path.log });
};

module.exports = clean;

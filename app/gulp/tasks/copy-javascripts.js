const config = require("../config.js");
const { src, dest, series } = require("gulp");
const del = require("del");
let clean, copy;

clean = async () => {
  await del("./javascripts/*", { cwd: config.path.output });
};

copy = () => {
  return src("./javascripts/*", { cwd: config.path.input })
    .pipe(dest("./javascripts", { cwd: config.path.output }));
};

module.exports = series(clean, copy);

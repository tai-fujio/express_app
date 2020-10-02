const config = require("../config.js");
const { src, dest, series } = require("gulp");
const del = require("del");
let clean, copy;

clean = async () => {
  await del("./images/*", { cwd: config.path.output });
};

copy = () => {
  return src("./images/*", { cwd: config.path.input })
    .pipe(dest("./images/", { cwd: config.path.output }));
};

module.exports = series(clean, copy);

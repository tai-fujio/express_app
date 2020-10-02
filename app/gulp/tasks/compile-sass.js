/* eslint-env node */
const config = require("../config.js");
const { src, dest, series } = require("gulp");
const del = require("del");
const sass = require("gulp-sass");
let clean, compile;

clean = async () => {
  await del("./stylesheets/*", { cwd: config.path.output });
};

compile = () => {
  return src("./stylesheets/*.scss", { cwd: config.path.input })
    .pipe(sass(config.sass))
    .pipe(dest("./stylesheets", { cwd: config.path.output }));
};

module.exports = series(clean, compile);

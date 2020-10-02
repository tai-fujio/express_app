/* eslint-env node */
const config = require("../config.js");
const { src, dest, series } = require("gulp");
let clean, minify;
const del = require("del");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

clean = async () => {
  await del("./javascripts/*", { cwd: config.path.output });
};

minify = () => {
  return src("./javascripts/*", { cwd: config.path.input })
    .pipe(babel({
      "presets": ["@babel/preset-env"]
    }))
    .pipe(uglify(config.aglify))
    .pipe(dest("./javascripts", { cwd: config.path.output }));
};

module.exports = series(clean, minify);

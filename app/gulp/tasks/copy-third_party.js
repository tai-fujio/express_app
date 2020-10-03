const config = require("../config.js");
const { src, dest, series, parallel } = require("gulp");
const del = require("del");
let clean, jquery, popper, bootstrap, fontAwesome;

clean = async () => {
  await del("./third_party/*", { cwd: config.path.output });
};

jquery = () => {
  return src("./node_modules/jquery/dist/*", { cwd: config.path.root })
    .pipe(dest("./third_party/jquery", { cwd: config.path.output }));
};

popper = () => {
  return src("./node_modules/popper.js/dist/**/**/*", { cwd: config.path.root })
    .pipe(dest("./third_party/popper.js", { cwd: config.path.output }));
};

bootstrap = () => {
  return src("./node_modules/bootstrap/dist/**/**/**/*", { cwd: config.path.root })
    .pipe(dest("./third_party/bootstrap", { cwd: config.path.output }));
};

fontAwesome = () => {
  return src("./node_modules/font-awesome/**/**/*", { cwd: config.path.root })
    .pipe(dest("./third_party/font-awesome", { cwd: config.path.output }));
};

module.exports = series(
  clean,
  parallel(
    jquery, popper, bootstrap, fontAwesome
  ),
);

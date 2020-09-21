const config = require("../config.js");
const gulp = require("gulp");
const del = require("del");

gulp.task("clean-log", () => {
  del("./*", { cwd: config.path.log });
});

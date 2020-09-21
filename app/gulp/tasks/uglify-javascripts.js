const config = require("../config.js");
const gulp = require("gulp");
const del = require("del");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

gulp.task("uglify-javascripts.clean", () => {
  return del("./javascripts/*", { cwd: config.path.output });
});

gulp.task("uglify-javascripts", ["uglify-javascripts.clean"], () => {
  return gulp.src("./javascripts/*", { cwd: config.path.input })
    .pipe(babel({
      "presets": ["@babel/preset-env"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./javascripts", { cwd: config.path.output }));
});

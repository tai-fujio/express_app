const config = require("../config.js");
const gulp = require("gulp");
const del = require("del");

gulp.task("copy-third_party.clean", () => {
  del("./third_party/*", { cwd: config.path.output });
});

gulp.task("copy-third_party.jquery", ["copy-third_party.clean"], () => {
  gulp.src("./node_modules/jquery/dist/*", { cwd: config.path.root })
    .pipe(gulp.dest("./thrid_party/jquery", { cwd: config.path.output }));
});

gulp.task("copy-third_party.popper.js", ["copy-third_party.clean"], () => {
  gulp.src("./node_modules/popper.js/dist/*", { cwd: config.path.root })
    .pipe(gulp.dest("./thrid_party/popper.js", { cwd: config.path.output }));
});

gulp.task("copy-third_party.bootstrap", ["copy-third_party.clean"], () => {
  gulp.src("./node_modules/bootstrap/dist/*", { cwd: config.path.root })
    .pipe(gulp.dest("./thrid_party/bootstrap", { cwd: config.path.output }));
});

gulp.task("copy-third_party.font-awesome", ["copy-third_party.clean"], () => {
  gulp.src("./node_modules/font-awesome/*", { cwd: config.path.root })
    .pipe(gulp.dest("./thrid_party/font-awesome", { cwd: config.path.output }));
});

gulp.task("copy-third_party", [
  "copy-third_party.jquery",
  "copy-third_party.popper.js",
  "copy-third_party.bootstrap",
  "copy-third_party.font-awesome",
]);

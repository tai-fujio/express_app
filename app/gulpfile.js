const config = require("./gulp/config.js");
const { series } = require("gulp");
const load = require("require-dir");
let tasks, clean_log, development, production;
tasks = load("./gulp/tasks", { recurse: true });
clean_log = tasks["clean-log"];
development = series(
  tasks["copy-third_party"],
  tasks["copy-images"],
  tasks["clean-log"],
  tasks["copy-javascripts"],
  tasks["compile-sass"]
);

production = series(
  tasks["copy-third_party"],
  tasks["copy-images"],
  tasks["clean-log"],
  tasks["uglify-javascripts"],
  tasks["compile-sass"]
);

module.exports = {
  development,
  production,
  clean_log,
  default: config.env.IS_DEVELOPMENT ? development : production
};

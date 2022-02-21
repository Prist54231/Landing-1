import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { images } from "./gulp/tasks/images.js";
import { plugins } from "./gulp/config/plugins.js";
import { server } from "./gulp/tasks/server.js";
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};
const mainTasks = gulp.parallel(copy, html, images);
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.images, images);
}
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
gulp.task("default", dev);

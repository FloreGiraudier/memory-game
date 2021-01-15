// configure BrwserSync to have live-reloading while coding
var browserSync = require("browser-sync").create();

browserSync.init({
    server: "./src",
    // as soon as afile is modified in src, the browser will reload the page
    files: "./src/**/*"
});

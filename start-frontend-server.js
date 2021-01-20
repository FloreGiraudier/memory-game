import { createRequire } from 'module'
import { fileURLToPath } from 'url'

// the require below can be used to load code written in commonJs
// we will use it to require browser-sync dependency
const require = createRequire(import.meta.url);

// configure BrwserSync to have live-reloading while coding
// BrwserSync = static server that serves frontend files
const browserSync = require("browser-sync").create();
// const cwd = fileURLToPath(new URL("./", import.meta.url)); // current working dirrectory

browserSync.init({
    // cwd,
    server: "./frontend",
    // as soon as a file is modified in /src, the browser will reload the page
    files: "./frontend/**/*",
});
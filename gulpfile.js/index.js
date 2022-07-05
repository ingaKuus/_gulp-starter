const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const path = require('./config/path.js');
const app = require('./config/app.js');

// Задачи
const clear = require('./tasks/clear.js')
const html = require('./tasks/html.js')
const pug = require('./tasks/pug.js')
const scss = require('./tasks/scss.js')
const js = require('./tasks/js.js')
const img = require('./tasks/img.js')
const font = require('./tasks/font.js')
const libs = require('./tasks/libs.js')

// Сервер
const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root
		}
	})
}

// Экспорт задач
exports.html = html;
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.libs = libs;

// Наблюдение
const watcher = () => {
	watch(path.pug.watch).on('all',series(pug, browserSync.reload));
	watch(path.scss.watch).on('all',series(scss, browserSync.reload));
	watch(path.js.watch).on('all',series(js, browserSync.reload));
	watch(path.img.watch, img).on('all', browserSync.reload);
	watch(path.font.watch, font).on('all', browserSync.reload);
	watch(path.libs.watch, libs).on('all', browserSync.reload);
}

const build = series(
	clear,
	parallel(pug, scss, js, img, font, libs)
);

const dev = series(
	build,
	parallel(watcher, server)
);

// Сборка
exports.default = app.isProd ? build : dev;
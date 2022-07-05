const {src, dest} = require('gulp');
const path = require('../config/path.js');
const app = require('../config/app.js')


// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// Обработка Libs
const libs = () => {
	return src(path.libs.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "Libs",
				message: error.message
			}))
		}))
		.pipe(dest(path.libs.dest))
}

module.exports = libs;
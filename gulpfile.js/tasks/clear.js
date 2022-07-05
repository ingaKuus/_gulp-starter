const del = require('del');
const path = require('../config/path.js');


// Удаление директории
const clear = () => {
	return del([`${path.root}/**/*`, `!${path.root}/video/**`]);
}

module.exports = clear;
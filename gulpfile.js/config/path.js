const pathSrc = './src';
const pathDest = './public';

module.exports = {
	root: pathDest,

	html: {
		src: pathSrc + '/html/*.html',
		watch: pathSrc + '/html/**/*.html',
		dest: pathDest
	},

	pug: {
		src: pathSrc + '/pug/*.pug',
		watch: pathSrc + '/pug/**/*.pug',
		dest: pathDest
	},

	css: {
		src: pathSrc + '/css/*.css',
		watch: pathSrc + '/css/**/*.css',
		dest: pathDest + '/css'
	},
	
	scss: {
		src: [pathSrc + '/sass/*.{sass,scss}', `!${pathSrc}/sass/{ui,vars,template}.{sass,scss}`],
		watch: pathSrc + '/sass/**/*.{sass,scss}',
		dest: pathDest + '/css'
	},

	js: {
		src: pathSrc + '/js/{libs/**/,}*.js',
		watch: pathSrc + '/js/**/*.js',
		dest: pathDest + '/js'
	},

	img: {
		src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		dest: pathDest + '/img'
	},

	font: {
		src: pathSrc + '/font/**/*.{ttf,otf,woff,woff2,eot,otc,ttc,svg}',
		watch: pathSrc + '/font/**/*.{ttf,otf,woff,woff2,eot,otc,ttc,svg}',
		dest: pathDest + '/font'
	},
	
	libs: {
		src: pathSrc + '/libs/**/*',
		watch: pathSrc + '/libs/**/*',
		dest: pathDest + '/libs'
	}
}
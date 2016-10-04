const gulp = require('gulp');
const webpackStream = require('webpack-stream');

const paths = {
	appjs    : './src/app.module.js',
	appindex : './src/index.html',
	dist     : './public/'
};

gulp.task('copyAppIndex', function () {
	return gulp.src(paths.appindex)
	.pipe(gulp.dest(paths.dist));
});

gulp.task('build', function () {
	return gulp.src(paths.appjs)
    .pipe(webpackStream({
		module : {
			loaders : [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: 'babel', // 'babel-loader' is also a legal name to reference
					query: {
						presets: ['es2015']
					}
				},
				{
					test: /\.css$/,
					loader: 'style!css'
				},
				{
					test: /\.html$/,
					loader: 'html?attrs=false'
				}
			]
		},
		output: {
        	filename: 'app.js',
      	}
	}))
	.pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('watch', function () {
	gulp.watch([ './src/**/*.js', './src/**/*.html' ], [ 'build' ]);
	gulp.watch(paths.appindex, [ 'copyAppIndex' ]);
});

gulp.task('default', [ 'copyAppIndex', 'build', 'watch' ]);

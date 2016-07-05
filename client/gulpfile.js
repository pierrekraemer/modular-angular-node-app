const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const paths = {
	appjs    : './src/app.js',
	appindex : './src/index.html',
	dist     : './public/'
};

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
				}
			]
		},
		output: {
        	filename: 'app.js',
      	}
	}))
	.pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('copyAppIndex', function () {
	return gulp.src(paths.appindex)
	.pipe(gulp.dest(paths.dist));
});

gulp.task('default', [ 'copyAppIndex', 'build' ]);

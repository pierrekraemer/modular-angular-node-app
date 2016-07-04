var gulp = require('gulp');
var webpack = require('gulp-webpack');

var paths = {
	appjs    : './src/app.js',
	appindex : './src/index.html',
	dist     : './public/'
};

gulp.task('build', function () {
	return gulp.src(paths.appjs)
    .pipe(webpack({
		module : {
			loaders : [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel', // 'babel-loader' is also a legal name to reference
					query: {
						presets: ['es2015']
					}
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

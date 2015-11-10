var gulp = require('gulp');

var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');


var paths = {
	appjs    : './src/app.js',
	appindex : './src/index.html',
	dist     : './public/',
	jsbuild  : 'app.js',
	i18n     : [
		'src/modules/**/*.json'
	],
	partials : [
		'src/modules/**/*.html'
	],
};


function bundle (b) {
	b.bundle()
	.pipe(source(paths.jsbuild))
	.pipe(gulp.dest(paths.dist + 'js/'));
}

function build (watch) {
	var b = browserify({
		cache : {},
		packageCache : {}
	});
	
	if (watch) {
		b = watchify(b);
		b.on('update', function () { bundle(b); });
	}
	
	b.add(paths.appjs);
	bundle(b);
}



gulp.task('copyAppIndex', function () {
	return gulp.src(paths.appindex)
	.pipe(gulp.dest(paths.dist));
});

gulp.task('copyAppI18n', function () {
	return gulp.src(paths.i18n)
	.pipe(gulp.dest(paths.dist + '/i18n'));
});

gulp.task('copyAppPartials', function () {
	return gulp.src(paths.partials)
	.pipe(gulp.dest(paths.dist + '/partials'));
});

gulp.task('browserify', function () {
	build(false);
});

gulp.task('watch', function() {
	build(true);
	gulp.watch(paths.appindex, [ 'copyAppIndex' ]);
});

gulp.task('default', [ 'copyAppIndex', 'copyAppI18n', 'copyAppPartials', 'browserify' ]);

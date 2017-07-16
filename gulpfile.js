var gulp = require('gulp-param')(require('gulp'), process.argv),
    jsConcat = require('gulp-concat'),
    ts = require('gulp-typescript');

var tsProject = ts.createProject({
    declaration: true
});

//gulp.task('scripts', ['typescript'], function () {
//   return gulp.src([
//        'scripts/data.js',
//        'scripts/**/*.js'
//    ])
//        .pipe(jsConcat('app.min.js'))
//        .pipe(gulp.dest('Build/Scripts/'));
//});

gulp.task('scripts', function() {
    var tsResult = gulp.src('components/**/*.ts')
        .pipe(ts({
            declaration: true
        }));
 
    return  tsResult.js.pipe(gulp.dest('components/builds/js'));
});

gulp.task('typescript', function () {
    return gulp.src([
        'components/**/*.ts'
    ]).pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        })).pipe(gulp.dest('components/builds/'));
});
gulp.task('default', ['scripts']);
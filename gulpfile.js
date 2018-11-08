let gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    stylint = require('gulp-stylint');

let path = {
    'stylus': ['src/stylus/**/*.styl']
}

gulp.task('stylint', () => {
    return gulp.src(path.stylus)
               .pipe(stylint({config: '.stylintrc'}))
               .pipe(stylint.reporter());
});

gulp.task('stylus', () => {
    return gulp.src(path.stylus)
               .pipe(stylus({
                   compress: false,
               }))
               .on('error', (e) => {
                   process.stderr.write('Error', e.message);
               })
               .pipe(gulp.dest("out"));
});


gulp.task('watch', () => {
    gulp.watch(path.stylus, ['stylint'])
});

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('less/bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest('css/'));
});
gulp.task('css', function () {
    gulp.watch('less/**/*.less', ['less']); //当所有less文件发生改变时，调用testLess任务
});
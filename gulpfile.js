var gulp = require('gulp');
var less = require('gulp-less');
var sourcemap = require('gulp-sourcemaps');
gulp.task('less', function () {
    gulp.src('less/main.less')
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(sourcemap.write('.map'))
        .pipe(gulp.dest('css/'));
});
gulp.task('css',['less'], function () {
    gulp.watch('less/**/*.less', ['less']); //当所有less文件发生改变时，调用testLess任务
});
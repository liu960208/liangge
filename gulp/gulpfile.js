//1.导入所需的模块
let gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    // babel = require('babel-cli'),
    concat = require('gulp-concat');

//2.创建并发布任务
gulp.task('test',()=>{
    console.log('gulp测试文件');
})
// es6
// gulp.task("es6",()=>{
//     gulp.src('./src/js/es6/*.js')
//     .pipe(babel({
//         presets:['@babel/env']
//     }))
//     .pipe(gulp.dest('./src/js/es5'));
// })
//压缩js
gulp.task('js',()=>{
    gulp.src('./src/js/es5/*.js')
        // .pipe(concat(main.min.js))
        .pipe(rename({suffix : '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
})

//压缩图片
gulp.task('image',()=>{
    gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})

//压缩sass
gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'));
})

//监听
gulp.task('default',()=>{
    gulp.watch('./src/js/es5/*.js',['js']);
    gulp.watch('./src/img/*',['imgage']);
    gulp.watch('./src/sass/*.scss',['sass']);
})
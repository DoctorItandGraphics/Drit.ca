const path = {
    sass: './sass',
    css: './static/css'
}

const gulp          = require('gulp')
const sass          = require('gulp-sass')
const sassLocation  = path.sass + '/app.scss'
const allSassFiles  = path.sass + '/**/*.scss'
const browserSync   = require('browser-sync').create()


gulp.task('style', () => {
    return gulp.src(sassLocation)
        .pipe(sass())
        .pipe(gulp.dest(path.css))
        // .pipe(touch());
})

gulp.task('watch', () => {
    gulp.watch(allSassFiles, gulp.series('style'))
    gulp.watch('*.scss').on('change', browserSync.reload)
})




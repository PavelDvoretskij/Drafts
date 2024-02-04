import {autoprefixer, cleanCSS, gulp, gulpif, isProd, paths} from "../imports.js";

export default function reset() {
    return gulp.src(paths.reset.src)
        .pipe(gulpif(isProd, autoprefixer({
            cascade: false
        })))
        .pipe(gulpif(isProd, cleanCSS({
            level: 2
        })))
        .pipe(gulp.dest(paths.reset.dest))
}

const gulp = require("gulp")
const jsValidate = require("gulp-jsvalidate")
const rename = require("gulp-rename")
const uglify = require('gulp-uglify')
const size = require("gulp-size")

const files = ["src/asmcss-mixin-lang.js"]

const buildTask = () =>
	gulp
		.src(files)
        .pipe(rename("asmcss-mixin-lang.js"))
		.pipe(gulp.dest("dist/js"))
		.pipe(size({ showFiles: true }))
		.pipe(uglify())
		.pipe(rename("asmcss-mixin-lang.min.js"))
		.pipe(gulp.dest("dist/js"))
		.pipe(size({ showFiles: true }))

const lintTask = () => gulp
	.src(files)
	.pipe(jsValidate())

// Build
gulp.task("build", gulp.series(buildTask));

// Test
gulp.task("test", gulp.series(lintTask));
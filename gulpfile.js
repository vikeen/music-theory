(function() {
    'use strict';

    var gulp      = require('gulp'),
        shell     = require('gulp-shell');

    gulp.task('deploy', shell.task([
        'node index.js'
    ]));

    // global watcher task to do all the magical stuff
    gulp.task('watch',function(){
        gulp.watch(['index.js', 'config.js', 'src/**/*.js'], ['deploy']);
    });

    gulp.task('default', ['deploy', 'watch']);
}());

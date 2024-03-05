var gulp = require('gulp'),
    concat = require('gulp-concat'),//for concatenation Files 
    prefix = require('gulp-autoprefixer'),//For added prefix for CSS3 properties
    pug = require('gulp-pug'),//for using pug
    livereload = require('gulp-livereload'),//for automated reload
    uglify = require('gulp-uglify'),//for Minify Js files
    cleanCSS = require('gulp-clean-css'),//for clean and minify css
    notify = require("gulp-notify"),//For Show Notification Bellow watching
    zip = require('gulp-zip');//For Compresed Files


    function html()
    {
       return gulp.src('project/index.pug')
                .pipe(pug({pretty:true}))
                // .pipe(pug())
                .pipe(gulp.dest('dist'))
                .pipe(notify("HTML Task Done !"))
                .pipe(livereload());
    };

    function css()
    {
       return gulp.src('project/main.css')
                .pipe(prefix("last 2 version"))
                .pipe(cleanCSS())
                .pipe(gulp.dest('dist/css'))
                .pipe(notify("CSS Task Done !"))
                .pipe(livereload());
    };

    function js()
    {
       return gulp.src('project/main.js')
                .pipe(uglify())
                .pipe(gulp.dest('dist/js'))
                .pipe(notify("JS Task Done !"))
                .pipe(livereload());
    };
    function zip()
    {
       return gulp.src('dist')
                .pipe(zip('Finale-Project'))
                .pipe(gulp.dest('.'))
                .pipe(notify("Archive Task Done !"))
                .pipe(livereload());
    };

    gulp.task('watch',async function(){
        require('./server.js');
        livereload.listen();
        gulp.watch(['project/*.pug'],html);
        gulp.watch(['project/main.css'],css);
        gulp.watch(['project/main.js'],js);
    });
    exports.default = function() {
        require('./server.js');
        livereload.listen();
        gulp.watch(['project/*.pug'],html);
        gulp.watch(['project/main.css'],css);
        gulp.watch(['project/main.js'],js);
      };

    // gulp.task('default',['watch']);
    // function watchingHTML(){
    //     return  gulp.src('project/index.pug')
    //             .pipe(pug({pretty:true}))
    //             .pipe(gulp.dest('dist/FromPugToHtml'))
    //             .pipe(notify("HTML Task done!"))
    //             .pipe(livereload());
    
    //  }
    
    //  function watchingCSS(){
    //     return gulp.src(['project/*.css'])//athez had lfiles
    //                 .pipe(sourcemaps.init())
    //                 .pipe(prefix('last 2 versions'))//dir liya prefix for css3 proprieties
    //                 .pipe(concat('main.css'))//atdir lihom concat b had smiya
    //                 .pipe(sourcemaps.write('.'))
    //                 .pipe(gulp.dest('dist/concat'))//w at7ato f had Lfolder
    //                 .pipe(notify("CSS Task done!"))
    //                 .pipe(livereload());
    
    //  }
    
    //  function watchingJS(){
    //     return gulp.src('project/*.js')
    //     .pipe(concat('All.js'))
    //     .pipe(uglify()) //minify Js Files
    //     .pipe(gulp.dest('dist/concat'))
    //     .pipe(notify("Js Task done!"))
    //     .pipe(livereload());
    
    //  }
    
    //  function compress(){
    //     return gulp.src('dist/**/*.*')
    //     .pipe(zip('Website.zip'))
    //     .pipe(notify("Project Compressed Task done!"))
    //     .pipe(gulp.dest('.'));
    //  }
    
    //  gulp.task('watch',async function(){
    //     require('./server.js');
    //     livereload.listen();
    //     gulp.watch(['project/index.pug','project/pug'],watchingHTML);
    //     gulp.watch(['project/*.css'],watchingCSS);
    //     gulp.watch(['project/*.js'],watchingJS);
    //     gulp.watch(['dist/**/*.*'],compress);
    // });
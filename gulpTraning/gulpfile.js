var gulp =require('gulp');
var uglify=require('gulp-uglify');   //scripts ko minify krta h               //scss file mein $grey is a variable   import hum partially file ko krenge bina underscore(_) ke
var concat=require('gulp-concat')
var livereload=require('gulp-livereload');    // chrome ko refresh krega         // less mein variable ko define krte h @grey se
var concat=require('gulp-concat');                // 2 css file ko merge krega 
var minifyCss=require('gulp-minify-css');
var autoprefix=require('gulp-autoprefixer');
var plumber=require('gulp-plumber');
var sm=require('gulp-sourcemaps')
var sass=require('gulp-sass')
var less=require('gulp-less');
var lessprefix=require('less-plugin-autoprefix');
var babel=require('gulp-babel');
var handlebars=require('gulp-handlebars')
var hlib=require('handlebars')
var declare=require('gulp-declare')
var wrap=require('gulp-wrap')
var imagemin=require('gulp-imagemin')
var imageminpng=require('imagemin-pngquant')
var jpegimage=require('imagemin-jpeg-recompress')
var del=require('del');    // for clean
var ts=require('gulp-typescript')
var tspro= ts.createProject("tsconfig.json");


var lp=new lessprefix({
    browsers:['last 2 versions']
})


var DIST_PATH='public/dist'
var SCRIPTS_PATH='public/scripts/**/*.js'
var CSS_PATH='public/css/**/*.css'
var TEMPLATES_PATH='templates/**/*.hbs'
var IMAGES_PATH='public/images/**/*.{png,jpeg,jpg,svg,gif}'

//  for css
/* gulp.task('styles',function(){
    console.log('styles task in progress');
      

 
    return gulp.src(['public/css/reset.css',CSS_PATH])
    .pipe(plumber(function(err){   // to handle css run time error   // server ko band ni hone dega
        console.log('styles error');
        console.log(err);
        this.emit('end')
        
    }))
    .pipe(sm.init())         // sm for debug
    .pipe(autoprefix())  // css mein webkit ms- wale syntax .css file mein jor deta h
    .pipe(concat('styles.css'))         // 2 file ko concate krke new name styles.css
    .pipe(minifyCss())                 //spaces remove kr dega css file mein se
    .pipe(sm.write())              // source maps used for  deep debugging its shows the original file
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());        // chrome refresh automatically

}) */

//----------------------------------------------------


// for scss
/* gulp.task('styles',function(){
    console.log('styles task in progress');
      

 
    return gulp.src('public/scss/styles.scss')
    .pipe(plumber(function(err){   // to handle css run time error
        console.log('styles error');
        console.log(err);
        this.emit('end')
        
    }))
    .pipe(sm.init())
    .pipe(autoprefix())  // css mein webkit ms- wale syntax .css file mein jor deta h
   .pipe(sass({
       outputStyle:'compressed'
   }))
    .pipe(sm.write())              // source maps used for  deep debugging its shows the original file
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());

}) */


//----------------------------------------------


// ----------- for less
gulp.task('styles',function(){
    console.log('styles task in progress');
      

 
    return gulp.src('public/less/styles.less')
    .pipe(plumber(function(err){   // to handle css run time error
        console.log('styles error');
        console.log(err);
        this.emit('end')
        
    }))
    .pipe(sm.init())
    .pipe(autoprefix())  // css mein webkit ms- wale syntax .css file mein jor deta h
   .pipe(less({
       plugins:[lp]
   }))
    .pipe(sm.write())              // source maps used for  deep debugging its shows the original file
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());

})


gulp.task('scripts',function(){
    console.log('scripts task in progress');

    return gulp.src(SCRIPTS_PATH)    // * is algebra for all files 
    .pipe(plumber(function(err){
        console.log(err);
        this.emit('end')
    }))
    .pipe(sm.init())
    .pipe(babel({
        presets:['es2015','@babel/core']
    }))
    .pipe(uglify())   
    .pipe(concat('scriptsall.js'))                   //  uglify function will be for removing extra spaces
    .pipe(gulp.dest(DIST_PATH))         //    destination folder
    .pipe(livereload());           //pipe is continiuation
})





gulp.task('clean',function(){
    return del.sync([

     'public/dist/images/clone.png'   // we can pass DIST_PATH for complete deletion of folder

    ])
})


gulp.task('watch',['default'],function(){
    console.log('starting server in watch mode');
    require('./server.js');
    
    livereload.listen();  //listen changes
    // for css //gulp.watch(CSS_PATH,['styles']);
    
  // for scss // gulp.watch('public/scss/**/*.scss',['styles'])
    
    gulp.watch('public/less/**/*.less',['styles'])
   
   // for js //gulp.watch(SCRIPTS_PATH,['scripts'])

    gulp.watch(TEMPLATES_PATH,['templates'])
})

gulp.task('templates',function(){
    console.log('templates task in progress')
    
    return gulp.src(TEMPLATES_PATH)
    .pipe(handlebars({
        handlebars:hlib
    }))
    .pipe(wrap('Handlebars.template(<%= contents%>'))
    .pipe(declare({
        namespace:'templates',
        noRedeclare:true
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload())
})

gulp.task('images',function(){
    console.log('images task in progress')


     return gulp.src(IMAGES_PATH)
     .pipe(imagemin(
         [
             imagemin.gifsicle(),
             imagemin.jpegtran(),
             imagemin.optipng(),
             imagemin.svgo(),
             imageminpng(),
             jpegimage()
         ]
     ))
     .pipe(gulp.dest(DIST_PATH +'/images'));

})



gulp.task('tsdemo',function(){

    return tspro.src()
    .pipe(tspro())
    .js.pipe(gulp.dest("public/dist"))
})


gulp.task('default',['clean','images','templates','styles','scripts'],function(){  //one task is depending on other task
    console.log('default task in progress')
})
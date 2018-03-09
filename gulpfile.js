const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

const jsFiles=['app/controllers/*.js','app/routes/*.js','*.js'];

gulp.task('default',function(){
   console.log("Default Gulp");
});



gulp.task('server',function(){
   let options={
      script: 'app/index.js',
      delayTime: 1,
      env: {
         port: 3000
      },
      watch: jsFiles
   };
   return nodemon(options).on(
       'restart',function(env){
          console.log('*************** <<< Restarting ... >>> ******************');
       }
   );
});

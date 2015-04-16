var gulp = require('gulp'); //Include gulp module, reference https://www.npmjs.com/package/gulp , http://gulpjs.com/
var concat = require('gulp-concat'); //module used to concatenate files (js/css), reference https://www.npmjs.com/package/gulp-concat, https://github.com/wearefractal/gulp-concat
var uglify = require('gulp-uglify'); //module used to minify files (js/css), reference https://www.npmjs.com/package/gulp-uglify
var rename = require('gulp-rename'); //module used to rename files (js/css), reference https://www.npmjs.com/package/gulp-rename
var serve = require('gulp-serve'); //module for serving the site from distribution folder, reference https://www.npmjs.com/package/gulp-serve
var es = require('event-stream'); //module used to merge two gulp src event output streams and return as single result, reference https://www.npmjs.com/package/event-stream

var karma = require('karma'); //module used to run karma with gulp, reference https://github.com/karma-runner/gulp-karma

//default task, return usage summary helpful for the end user 
gulp.task('default', function() {
  console.log("Usage:\r\n1. use 'gulp build' - to build src to dist"+
  "\r\n2. use 'gulp serve' - to start serving the dist folder (compiled assignment)"+
  "\r\n3. use 'gulp coverage' - to run test results");
});


//gulp build task, to concat and minify all js and css
gulp.task('build', function() {
   //define all input and output path for concat and minify (for js and css separately)
	var path = {
		jsSource : ['./src/js/jquery.min.js','./src/js/angular.min.js','./src/js/angular-ui-router.min.js','./src/js/bootstrap.min.js','./src/js/angular-resource.min.js'],
		jsTarget:'js/plugins.min.js',
		jsCustomSource:['./src/js/custom/app.js','./src/js/custom/**/*.js'], //JS order should first to initialize app.js then include any other controllers or resources
		jsCustomTarget: {concat: 'js/custom.js', min: 'js/custom.min.js'},
		cssSource : ['./src/css/bootstrap.min.css'],
		cssTarget: 'css/all.min.css',
		defaultHtml:'./src/index.html',
		templateSource : './src/templates/*.html'
	};
	
	es.merge(
		gulp.src(path.defaultHtml).pipe(gulp.dest('./dist/')), //move default html file directly
		gulp.src(path.jsSource).pipe(concat(path.jsTarget)).pipe(gulp.dest('./dist/')), //move all third party js to dist (without uglify, already minified)
		gulp.src(path.jsCustomSource).pipe(concat(path.jsCustomTarget.concat)).pipe(gulp.dest('./dist/')).pipe(rename(path.jsCustomTarget.min)).pipe(uglify()).pipe(gulp.dest('./dist/')),
		gulp.src(path.cssSource).pipe(concat(path.cssTarget)).pipe(gulp.dest('./dist/')),
		gulp.src(path.templateSource).pipe(gulp.dest('./dist/templates/')),  //move template html file directly
		gulp.src('./src/json/**/*.json').pipe(gulp.dest('./dist/json')), //move json folder to dist
		gulp.src('./src/js/test/*.*').pipe(gulp.dest('./dist/test')), //move test folder to dist
		gulp.src('./src/js/test/mock/*.*').pipe(gulp.dest('./dist/test/mock')) //move test/mock folder to dist
	);
});



//gulp serve task, to serve the site (dist folder)
gulp.task('serve', serve({
		root: ['dist'],
		port: 8080
	})
);


//gulp coverage task, to run test results
gulp.task('coverage', function() {
  return karma.server.start({
    configFile: __dirname + '/karma.config.js'
  });
});


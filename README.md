# Assignment
--------------------------------------------------------------------------
1. Prerequisite  - npm

2. Dependencies - Install the following dependencies in project working folder
gulp, gulp-concat, gulp-uglify, gulp-rename, gulp-serve, event-stream, karma
It can be installed by switching npm command prompt to working directory and execute the cmd similar to: npm install gulp-uglify

3. Usage - 
Execute the following command for their usage (provided gulp is installed and configured properly)
	gulp build
		To build source files available in src folder and move compiled output to dist folder 
	gulp serve
		To start serving the compiled app in http://localhost:8080, (once executed the url can be viewed in browser)
	gulp coverage
		To start running the tests

'use strict';
app.factory('Users', ['$resource', function($resource) {
	return $resource('json/user/:id.json'); //temporarily assigned to json file since no DB available 
}]);

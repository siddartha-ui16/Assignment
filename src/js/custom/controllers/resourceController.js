'use strict';
app.controller('resourceController', ['$scope' ,'Users', function ($scope, Users) {
	//Set page title in model
	$scope.title ="Resource";
	
	//query user list and set to users model, query is used here to call get with isArray parameter true
	Users.query({id:'list'},function(response){
		$scope.users = response;
		
		//To select first user by default
		$scope.selectedUser = $scope.users[0].Id;
		
		//trigger user changed to load first user details
		$scope.userChanged();
	}); 
	
	//To Load user details on user changed
	$scope.userChanged = function(){
		Users.get({id:$scope.selectedUser},function(response){
			$scope.userDetail = response;
		});
	};
	
}]);
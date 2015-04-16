
'use strict';
 
describe('formController', function(){
    var scope;//we'll use this scope in our tests
    var userForm;
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('sampleApp'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($compile, $rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
		
		//Set default for testing Invalid fields
		scope.userForm = {FName:"",LName:"",Email:"",Mobile:""};
		
        //declare the controller and inject our empty scope
        $controller('formController', {$scope: scope});
    }));
	
    // tests start here
	 it('should not show validation before submit', function(){
			expect(scope.startValidate).toBe(false);
    });
	
	 it('should start show validation after submit clicked when form is invalid', function(){
			scope.userForm.$invalid = true;
			scope.submit();
			expect(scope.startValidate).toBe(true);
    });
	
	it('should stop show validation after submit clicked when form is valid', function(){
			scope.userForm.$invalid = false;
			scope.submit();
			expect(scope.startValidate).toBe(false);
    });
	
	it('should stop show validation after cancel clicked', function(){
			scope.cancel();
			expect(scope.startValidate).toBe(false);
    });
});
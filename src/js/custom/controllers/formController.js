'use strict';
app.controller('formController', ['$scope', function ($scope) {
	
	//user model , default empty
	$scope.user ={FName:"",LName:"",Email:"",Mobile:""};
	
	$scope.iscontrolInvalid = function(control){
		
		if($scope.userForm[control].$invalid){
				return true;
		}
		
		//validation for mobile number (number only)
		if(control=="Mobile"){
			var reg =  /^\d+$/; //regular expression for number only
			if(!reg.test($scope.user.Mobile)){
				return true;
			}
		}
		return false;
	};
	
	//Model to track start validation on submit clicked
	$scope.startValidate = false;
	
	$scope.submit = function(){
		
		$scope.startValidate = true;
		
		//Submit on form exists and valid
		if($scope.userForm && !$scope.userForm.$invalid){
			//todo save on submit
			alert("Form Submitted Successfully");
			//Reset user model
			$scope.cancel();
		}
		
	};
	
	$scope.cancel = function(){
		//Reset user model
			$scope.user ={FName:"",LName:"",Email:"",Mobile:""};
			$scope.startValidate = false;
	};
	
   }]);
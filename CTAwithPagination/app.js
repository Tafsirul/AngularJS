var App =  angular.module('customerApp',['angularUtils.directives.dirPagination']);
App.controller('customerCtrl',function($scope,$http){
	
	$scope.customers = [];

	$http.get('customer.json')
	.success(function(resp){
		$scope.customers = resp;
		//console.log($scope.customers)
	});

	$scope.sort = function(keyname){
		$scope.sortKey = keyname;  			//set the sortKey to the param passed
		$scope.reverse = !$scope.reverse;  //if true make it false and vice versa
	};

	$scope.delCustomer = function(customer){
		$scope.customers.splice($scope.customers.indexOf(customer),1);
	}

	$scope.addCustomer = function(){
		$scope.customers.push({
			"ID":$scope.cID,
			"FirstName":$scope.cFname,
			"LastName":$scope.cLname,
			"Age":$scope.cage,
			"Hobby":$scope.cHobby
		});
		$scope.cID ="";$scope.cFname="";$scope.cLname="";$scope.cage="";$scope.cHobby="";


	}

});
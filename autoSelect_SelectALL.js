App.controller('homeCtrl',function($scope,$filter,$state,itemService){
	$scope.items = [{"status":false,"name":"Abstract"},{"status":false,"name":"Publication"},{"status":false,"name":"Inventor"},{"status":false,"name":"Language"},{"status":false,"name":"Source"},{"status":false,"name":"Priority"}];
	$scope.sAll = false;
	$scope.selectAll = function(){
		angular.forEach($scope.items,function(item) {
			item.status = $scope.sAll;
		});
	};
	$scope.itemChanged = function(){
		var trueItems = $filter('filter')($scope.items,{'status':true});
		if(trueItems.length == $scope.items.length){
			$scope.sAll = true;
		}else if(trueItems.length == 0){
			$scope.sAll = false;
		}else{
			//inderminate...
		}
	}
angular.module('toDoApp',[])
.controller('toDoCtrl',function($scope){

    $scope.toDos = [{"id":1, "subject":"test Todo", "isCompleted":false}];

    $scope.addTodo = function(){
        var n = Math.floor(Math.random()*1000);

        $scope.toDos.push({"id":n, "subject":$scope.sub, "isCompleted":false});
        $scope.sub = "";
    };

    $scope.deleteTodo = function(ind){
        $scope.toDos.splice(ind,1);
    }

});
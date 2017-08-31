 angular.module('myApp').controller('myCtrl', function($scope){
   $scope.todos = ['make a todo list', 'display my todos', 'create new todos', 'remove todos', 'strike out todos'];
   $scope.addNewTodo = function(newTodo){
     $scope.todos.push(newTodo)
     $scope.newTodo = ""
    }
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1)
    }
 })

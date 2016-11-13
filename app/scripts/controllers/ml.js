
angular.module('mzcApp')
  .controller('chao1', function ($scope,$http) {
      $http({
	   	  		method:'get',
	   	  		url:'http://www.somenote.cn:1602/list2'
	   	  	}).success(function(e){
	   	  		$scope.hu=e;
	   	  	})
  });
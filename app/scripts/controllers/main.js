'use strict';

/**
 * @ngdoc function
 * @name mzcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mzcApp
 */
angular.module('mzcApp')
  .controller('ma', function ($scope,$http) {
      $http({
	   	  		method:'get',
	   	  		url:'http://www.somenote.cn:1602/list1'
	   	  	}).success(function(e){
	   	  		$scope.ma=e;
	   	  	})
  })
  
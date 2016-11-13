'use strict';

/**
 * @ngdoc overview
 * @name mzcApp
 * @description
 * # mzcApp
 *
 * Main module of the application.
 */
angular
  .module('mzcApp', ['ui.router']).config(function($stateProvider,$urlRouterProvider){ 
	$stateProvider.state("ma",{
		    templateUrl:"views/main.html",
			url:"/main",
			controller:'ma'
		  })
		  .state("chao",{
		    templateUrl:"views/kk.html",
			url:"/kk",
			controller:'chao1'
			  })
	});

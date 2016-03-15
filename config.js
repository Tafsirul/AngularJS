var App = angular.module('myApp',['ui.router']);

App.config(function($stateProvider,$urlRouterProvider){

		$urlRouterProvider
		.otherwise('home');

		$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'template/home.html',
			controller:'homeCtrl'
		});

		$stateProvider
		.state('details',{
			url:'/details',
			templateUrl:'template/details.html',
			controller:'detailsCtrl'
		});	

		$stateProvider
		.state('final',{
			url:'/final',
			templateUrl:'template/final.html',
			controller:'finalCtrl'
		});

});
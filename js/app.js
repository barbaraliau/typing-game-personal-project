var app = angular.module('typingGame', ['firebase', 'myDirectives', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/game")

	$stateProvider
		.state('game', {
			url: "/game",
			views: {
				"viewA" : { templateUrl: "divs.html", 
									controller: "DivController"},
				"viewB" : { templateUrl: "divs copy.html",
									controller: "SecondDivController"}
			}
		})


 });

	
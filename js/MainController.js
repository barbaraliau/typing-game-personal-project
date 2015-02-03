var app = angular.module('typingGame');

app.controller('GameController', function($scope, gameService) {

	$scope.getSwanson = function(){
		gameService.getQuote().then(function(quote){
			$scope.swansonQuote = quote;
		})
	}


	


})
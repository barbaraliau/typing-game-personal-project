var app = angular.module('typingGame');

app.controller('DivController', function($scope, gameService){

	var makeDivArray = function(){
		var divArray = [];
		for (var i = 0; i < 120; i++) {
			divArray.push({id: i});
		}
			console.log(divArray);
			return divArray;
	};

 	$scope.divArray = makeDivArray();
	$scope.change = [];
	var counter = 0;
	var i = 0;

	$scope.compareQuote = function(){
		if(($scope.textInput.length - 1) === counter) {
			if($scope.swansonQuote.indexOf($scope.textInput) === 0) {
				$scope.change[i] = true;
				counter++;
				// i++;
			}
		}
		if($scope.textInput.length - 1 === $scope.swansonQuote.length - 1) {
			gameService.getQuote().then(function(quote){
				$scope.swansonQuote = quote;
				$scope.textInput = "";
				counter = 0;
			})
		}
		if(i === 120) {
			alert("Finished!")
		}
	};


	$scope.getSwanson = function(){
		gameService.getQuote().then(function(quote){
			$scope.swansonQuote = quote;
		})
	};




});
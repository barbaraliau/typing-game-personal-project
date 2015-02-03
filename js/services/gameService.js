var app = angular.module('typingGame');

app.service('gameService', function($q, $http){

	var fireUrl = new Firebase("https://typing-game.firebaseio.com/");


	this.getQuote = function(){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: "http://ron-swanson-quotes.herokuapp.com/quotes"
		}).then(function(data){
			var results = data.data.quote;
			results = results.replace(/[^a-zA-Z :;.-?!,––­­‑—…]+/ig, '');
			console.log(results);
			deferred.resolve(results);
		})
		return deferred.promise;
	};






});



//www.placebear.com/500/400
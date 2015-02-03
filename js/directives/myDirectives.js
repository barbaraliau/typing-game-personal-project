var app = angular.module('myDirectives', []);

app.directive('pendingLoad', function($q){
	return {
		restrict: 'A',
		scope: {
			request: "&"
		},
		link: function(scope, elem, attrs) {
			// console.log(scope, elem, attrs);	
			var saveBtnName = attrs.$$element.context.innerText;		
				elem.click(function(){
					elem.html('<img src="716.gif">')
						scope.request().then(function(){
							elem.html(saveBtnName);	
					})
				})
			}
		}
	}
);
//////$q handles for events that don't return a promise
//link: function(scope, elem, attrs) {
// 	var spinnerIcon = angular.element('<i class="fa fa-spinner fa-spin"</i>');
// 	spinnerIcon.hide();
// 	elem.after(spinnerIcon); 

// 	var invokeRequest = function() {
// 		var deferred = $q.defer();

// 		deferred.resolve(scope.request());

// 		return deferred.promise;
// 	}

// 	elem.click(function(){
// 		elem.hide();
// 		spinnerIcon.show();
// 		invokeRequest().then(function(){
// 			elem.show();
// 			spinnerIcon.hide();
// 		})
// 	})
// }







app.directive('notifyStuff', function(){
	return {
		scope: {
			title: '=',
			body: '=',
			icon: '='
		},
		link: function(scope, elem, attrs){
			console.log(scope, elem, attrs);
			 var Notification = window.Notification || window.mozNotification || window.webkitNotification;
    
    	Notification.requestPermission(function (permission) {
                //console.log(permission);
            });
	    elem.click(function(){
	    		var notify = new Notification(scope.title, {body: scope.body, icon: scope.icon});
	    	})
    	
    
  }
		
	}

})





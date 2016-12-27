(function(angular){
	
angular.module('moviecat.moviedetail', ['ngRoute','moviecat.services.http'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:id', {
    templateUrl: 'movie_detail/view.html',
    controller: 'movieDetailController'
  });
}])

.controller('movieDetailController', ['$scope','HttpService','$routeParams','$route','appConfig',function($scope,HttpService,$routeParams,$route,appConfig) {
	
	$scope.movie = {};
	 	$scope.loding = true;
	 	var id = $routeParams.id;
	 	var apiAddress =appConfig.messageAddress+id;
	HttpService.jsonp(apiAddress,{},function(data){
		$scope.movie = data;
		$scope.loding=false;
		$scope.$apply();
		
	})

}]);
})(angular)

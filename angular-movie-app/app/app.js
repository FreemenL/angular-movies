(function(angular){
		

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.moviedetail',
  'moviecat.movieList',
  'moviecat.directives.auto'
  
]).constant('appConfig',{
	pageSize:10,
	movieAddress:'http://api.douban.com/v2/movie/',
	messageAddress:'http://api.douban.com/v2/movie/subject/'
}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).controller('searchController',['$scope','$route','$routeParams','appConfig',function($scope,$route,$routeParams,appConfig){
	
	$scope.input = '';
	$scope.search = function(){
		$route.updateParams({category:'search',q:$scope.input})
	}
}]);
//.controller('navController',['$scope','$location',function($scope,$location){
//	$scope.$location = $location;
//	$scope.$watch('$location.path()',function(now){
//		if(now.startsWith('/in_theaters')){
//			$scope.type='in_theaters';
//		}else if(now.startsWith('/coming_soon')){
//			$scope.type='coming_soon';
//		}else if(now.startsWith('/top250')){
//			$scope.type='top250';
//		}
//	})
//}]);


})(angular)

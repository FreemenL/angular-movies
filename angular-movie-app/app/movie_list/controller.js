(function(angular){
	
angular.module('moviecat.movieList', ['ngRoute','moviecat.services.http'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:category/:page', {
    templateUrl: 'movie_list/view.html',
    controller: 'movieListController'
  });
}])

.controller('movieListController', ['$scope','HttpService','$routeParams','$route','appConfig',function($scope,HttpService,$routeParams,$route,appConfig) {
		
		var count = appConfig.pageSize;
		var page = parseInt($routeParams.page)
		var start=(page-1)*count;
		$scope.totalPages=0;
		$scope.title = 'loading...';
		$scope.totalCount=0;
		$scope.currentPage = page;
		$scope.loading=true;
	HttpService.jsonp(appConfig.movieAddress+$routeParams.category,{start:start,count:count,q:$routeParams.q},function(data){
		$scope.totalCount=data.total;
		$scope.subjects = data.subjects;
		$scope.title=data.title;
		$scope.totalPages = Math.ceil($scope.totalCount/count);
		$scope.loading=false;
		$scope.$apply();
		
	})

//	var doubanAddress = 'http://api.douban.com/v2/movie/in_theaters'
//	$http.get('/angular03/angular-boilerplate-master/app/data.json').then(function(res){
//		if(res.status==200){
//			$scope.subjects=res.data.subjects;
//			console.log(res);
//		}else{
//			$scope.message='获取数据失败！'+res.statusText;
//			
//		}
//	},function(err){
//		console.log(err);
//		$scope.message='获取数据失败！'+err.statusText;
//	})
		$scope.go = function(page){
			if(page>=1&&page<=$scope.totalPages){
				$route.updateParams({page:page})
			}
		}

}]);
})(angular)

(function(angular){
	angular.module('moviecat.directives.auto',[])
	.directive('autoFocus',['$location',function($location){
		var path = $location.path();
		return {
			
			restrict:'ECMA',
			link:function($scope,iElm,iAttrs,controller){
				$scope.$location=$location;
				$scope.$watch('$location.path()',function(now){
					var aLink = iElm.children().attr('href');
					var type = aLink.replace(/#(\/.+?)\/\d+/,'$1')
					if(now.startsWith(type)){
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					}
				})
				
				
			}
		}
	}])
	
})(angular)

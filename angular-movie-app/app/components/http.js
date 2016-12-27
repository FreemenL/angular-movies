(function(angular){
	angular.module('moviecat.services.http',[])
	.service('HttpService',['$window','$document',function($window,$document){
		
		this.jsonp = function(url,data,callback){
			
			var queryString = url.indexOf('?')==-1?'?':'';
			for(var i in data){
				queryString+=i+'='+data[i]+'&';
			};
			var funcName ='my_json_func'+Math.random().toString().replace('.','');
			
			queryString+='callback='+funcName;
			var scriptEle = $document[0].createElement('script');
			scriptEle.src=url+queryString;
			$window[funcName]=function(data){
				callback(data);
				$document[0].body.removeChild(scriptEle);
			};
			$document[0].body.appendChild(scriptEle);
		}
	}])
})(angular)

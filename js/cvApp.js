/* Controllers */
var cvApp = angular.module('cvApp', [
	'ngRoute',
  'cvControllers'
  // ,'routeStyles'
  ,'omr.angularFileDnD'
  // ,'angularFileUpload'
  ]);

//Do configuration and routing here
// cvApp.config(function($routeProvider,  $locationProvider){
//     $routeProvider
//         .when('/cvs',{
//             controller: 'CVListCtrl',
//             templateUrl: 'partials/cvView.html'
//         })
//         .when('/details/:itemId',{
//         		controller: 'CVDetailsCtrl',
//         		templateUrl:'partials/cvdetails.html'
//         })
//         .otherwise({
//         	'redirectTo': '/cvs'
//       	});
// });


cvApp.config(
    function($routeProvider) {
        $routeProvider
          .when('/cvs', {
          	controller: 'CVListCtrl',
          	templateUrl: 'partials/cvView.html'
          })
          .when('/details/:itemId', 
              {   
                  controller:'CVDetailsCtrl', 
                  //to to function to pass RouteProvider.itemId in
                  templateUrl: function(params){ return 'partials/details/' + params.itemId + '.html'; }
                  //, css: function(params){ return 'css/theme/' + params.itemId + '.css'; }
                 //,css : 'css/theme/cocacola.css'
              }
          )
          .otherwise({'redirectTo': '/cvs'});
    }
);



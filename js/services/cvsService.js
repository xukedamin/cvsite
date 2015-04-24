cvApp.factory("cvsService", function($http){
    var _cvs = [];

    var _getcvs = function(){
        $http.get("/js/data/cvs.json")
            .then(function(results){
                //Success
                angular.copy(results.data, _cvs); //this is the preferred; instead of $scope.movies = result.data
            }, function(results){
                //Error
                 console.log('Error:' + results);
            })
    }

    var _addNewCV = function(cv){
        _cvs.splice(0, 0, cv);
    }

    return{
        cvs: _cvs,
        getcvs: _getcvs,
        _addNewCV: _addNewCV
    };
});
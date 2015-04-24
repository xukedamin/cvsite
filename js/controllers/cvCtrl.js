
var cvControllers = angular.module('cvControllers',[]);

cvControllers.controller('CVListCtrl', function ($scope, $http, $q, cvsService) {

 $scope.cvs = cvsService.cvs;  
  cvsService.getcvs();

 $scope.addNewcv = function(cvName){
    var cv = {name: cvName};
    cvsService.addNewcv(cv);
  }

  //init
   $scope.orderProp = 'name';

    // add a row in order invoice
    $scope.addItem = function() {
        $scope.invoice.items.push({
            cv_type:$scope.cvs[0],
            cvs: $scope.cvs
        });
    },

    // add a row in order invoice
    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    //calculate total invoice
    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.cv_type.price;
        });
        return total;
    }

    $scope.printDiv = function(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;        
      var popupWin = window.open('', '_blank', 'width=470,height=300');
      popupWin.document.open();
      popupWin.document.write('<html><head> <title>Ka notes</title><link rel="stylesheet" type="text/css" href="css/bootstrap.css"/><link rel="stylesheet" type="text/css" href="css/custom.css"/></head><body onload="window.print()">' + printContents + '</html>');
      popupWin.document.close();
    } 

});


cvControllers.controller('CVDetailsCtrl', function($scope, $http, $routeParams) {

  $http.get('js/data/cvs.json').success(function(data){
    $scope.cvs = data;  

    $scope.itemId = $routeParams.itemId;
     // console.log($routeParams);
    
  
    if ($routeParams.itemId > 0){
      $scope.prevItem = Number($routeParams.itemId) - 1;
    }
    else {
      $scope.prevItem  = $scope.cvs.length - 1;
    }
    if($routeParams.itemId < $scope.cvs.length - 1){
      $scope.nextItem = Number($routeParams.itemId) + 1;
    }
    else {
      $scope.nextItem = 0;
    }

    //remove all other theme style
    $("LINK[href*='css/theme']").remove();
    $('head').append('<link rel="stylesheet" href="css/theme/'+  $routeParams.itemId +'.css" type="text/css" />');

    
    $http.get('js/data/candidates.json').success(function(candidates){
      $scope.candidate = candidates[0];
      $scope.edus = $scope.candidate.education;
      $scope.exps = $scope.candidate.experience;
      $scope.skills = $scope.candidate.skill;

      //edus
      $scope.addEdu = function() {
        $scope.edus.push({
            "uni": "Foreign Trade University",
            "period":{ "start": "2013", "end": "2014" },
            "desc" :"Major: Marketing (Excellent Degree, total result: 8.0)"
        })
      };
      $scope.removeEdu = function(index) {
        $scope.edus.splice(index, 1);
      };

      //experience
      $scope.addExp = function() {
        $scope.exps.push({
            "company": "ABC shop",
            "period":{ "start": "2013", "end": "2014" },
            "desc" : "Greeted abc Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        })
      };
      $scope.removeExp = function(index) {
        $scope.exps.splice(index, 1);
      };

      //skills
      $scope.addSkill = function() {
        $scope.skills.push({
            "name": "Communication skill",  "rate" :" 50%"
        })
      };
      $scope.removeSkill = function(index) {
        $scope.skills.splice(index, 1);
      };


     }); //end get candidate.json

  }); //end get cvs.json

}); //end CVDetailsCtrl
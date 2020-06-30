(function(){
'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){
    $scope.dishes="";
    $scope.answer="";
    $scope.calc=function(){
      var y=$scope.dishes.split(",");
      var count=y.length;
      for(var i=0;i<y.length;i++)
      {
        if(!y[i].trim())
          count--;
      }
      if(count>3)
        $scope.answer="Too much!";
      else
        if(count>0)
          $scope.answer="Enjoy!";
        else
          $scope.answer="Please enter data first";
    };
  }
})();

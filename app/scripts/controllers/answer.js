angular.module('angularFormationApp')
  .controller('AnswerCtrl', function ($routeParams, $scope, $http, $filter) {
    $http.get("http://192.168.10.73:8080/tweets/"+$routeParams.tweet+"/answers")
        .success(function(data){
            $scope.tweets = data;
            $scope.tweets = $filter('orderBy')($scope.tweets, 'date', false);
        })
        .error(function(data){
            $scope.errorsGet = data;
        })

 $scope.submit=function() {
    var newTweet={'authorEmail':$scope.myEmail,'authorName':$scope.myName,'message':$scope.myMessage};

    $http.post("http://192.168.10.73:8080/tweets/"+$routeParams.tweet+"/answers", newTweet)
    .success(function(data){
    })
    .error(function(data){
      $scope.errorsPost = data;
    })
  }

 });

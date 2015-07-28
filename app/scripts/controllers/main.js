angular.module('angularFormationApp')
  .controller('MainCtrl', function ($scope, $http, $filter) {

    $http.get("http://192.168.10.73:8080/tweets")
    .success(function(data){
        $scope.tweets = data;
        $scope.tweets = $filter('orderBy')($scope.tweets, 'date', true);
    })
    .error(function(data){
        $scope.errorsGet = data;
    })

  //$scope.timestampToRelativeDate =function(timestamp) {
  //  return moment(timestamp).fromNow();
  //}

  $scope.submit=function() {
    var newTweet={'authorEmail':$scope.myEmail,'authorName':$scope.myName,'message':$scope.myMessage};

    $http.post("http://192.168.10.73:8080/tweets", newTweet)
    .success(function(data){
    })
    .error(function(data){
      $scope.errorsPost = data;
    })
  }

  });


angular.module('angularFormationApp')
  .filter('ago', function() {
    return function(timestamp) {
     return moment(timestamp).fromNow();
    }
  });

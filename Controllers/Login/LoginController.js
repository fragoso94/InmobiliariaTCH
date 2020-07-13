app.controller('LoginController',["$scope", "$state", function ($scope, $state) {

    $scope.login = () =>
    {
        $state.go('home')
    };
}]);
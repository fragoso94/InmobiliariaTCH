app.controller('LoginController', ['$scope','$state', 'ApiServices', '$rootScope', function ($scope,$state, ApiServices, $rootScope) {
    $scope.form = {};
    let urlApiLocal = $rootScope.urlBase + '/Login';
    let urlApiProd = $rootScope.urlBaseProd + '/Login';

    $scope.login = () => {
        var data = {
            "Login": $scope.form.user,
            "password" : $scope.form.pass
        };
        ApiServices.getWS('POST', urlApiProd, data);
    }

}]);
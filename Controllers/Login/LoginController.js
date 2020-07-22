app.controller('LoginController', ['$scope','$state', 'ApiServices', '$rootScope', function ($scope,$state, ApiServices, $rootScope) {
    $scope.form = {};
    let urlApiLocal = $rootScope.urlBase + '/Login/LoginPortal';
    let urlApiProd = $rootScope.urlBaseProd + '/Login';

    $scope.login = () => {
        var data = {
            "Usuario": $scope.form.user,
            "Password" : $scope.form.pass
        };
        ApiServices.getWS('LOGIN', urlApiLocal, data);
    }

}]);
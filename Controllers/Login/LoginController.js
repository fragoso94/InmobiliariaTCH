app.controller('LoginController', ['$scope','$state', 'ApiServices', '$rootScope', function ($scope,$state, ApiServices, $rootScope) {
    $scope.form = {};
    let urlApiDaniel = $rootScope.urlBase + '/Login';

    $scope.login = () => {
        var data = {
            "Login": $scope.form.user,
            "password" : $scope.form.pass
        };
        ApiServices.getWS('POST', urlApiDaniel, data);
    }
    /*var response = ApiServices.getWS('POST', urlApiDaniel, data);
    response.then(function (datos) {
        if(datos.estado == 1){
            //$state.go('inmobiliaria');
        }else{
            alert(datos.mensaje);
        }
    })
    response.catch(function (error) {
        console.error(error)
    });*/

}]);
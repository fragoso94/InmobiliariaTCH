app.controller('LoginController', ['$scope','$state', 'ApiServices', '$rootScope', function ($scope,$state, ApiServices, $rootScope) {
    $scope.form = {};
    let urlApiLocal = $rootScope.urlBase + '/Login/LoginPortal';
    let urlApiProd = $rootScope.urlBaseProd + '/Login';

    $scope.login = () => {
        $usuario = validate($scope.form.user);
        $password = validate($scope.form.pass);
        if($usuario){
            if($password){
                Loguear();
            }
            else{
                $scope.mensajeValidacion ="password";
            }
        }
        else{
            $scope.mensajeValidacion ="usuario";
        }
    }

    Loguear = () => {
        var data = {
           "Usuario": $scope.form.user,
           "Password": $scope.form.pass
       };
       ApiServices.getWS('LOGIN', urlApiLocal, data);

    }

    function validate(campo){
        if(campo == undefined || campo == ""){
            return false;
        }else{ return  true;}
    };

}]);
app.controller('LoginController', ['$scope','$state', 'ApiServices', '$rootScope', function ($scope,$state, ApiServices, $rootScope) {
    $scope.form = {};
    //let urlApiLocal = $rootScope.urlBase + '/Login/LoginPortal';
    let urlApiProd = $rootScope.urlBaseProd + '/Login/LoginPortal';

    $scope.login = () => {
        $usuario = validar($scope.form.user);
        $password = validar($scope.form.pass);
        if($usuario){
            if($password){

                $scope.mensajeValidacion = "";
                Loguear();
            }
            else{
                $scope.mensajeValidacion ="La Contraseña es requerida";
            }
        }
        else{
            $scope.mensajeValidacion ="El Usuario Es requerido";
        }
    }

    Loguear = () => {
        var data = {
           "Usuario": $scope.form.user,
           "Password": $scope.form.pass
       };
       $scope.mensajeValidacion ="Datos Incorrectos, llame a soporte técnico para reuperar su contraseña";
       ApiServices.getWS('LOGIN', urlApiProd, data);

    }

    validar = (campo)=>{
        if(campo == undefined || campo == ""){            
            return false;
        }else{ return  true;}
    };

}]);
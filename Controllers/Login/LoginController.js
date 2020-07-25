app.controller('LoginController', ['$scope','$state', 'ApiServices', '$rootScope', function ($scope,$state, ApiServices, $rootScope) {
    $scope.form = {};
    //let urlApiLocal = $rootScope.urlBase + '/Login/LoginPortal';
    let urlApiProd = $rootScope.urlBaseProd + '/Login/LoginPortal';

    $scope.login = () => {
        $usuario = validar($scope.form.user);
        $password = validar($scope.form.pass);
        if($usuario){
            if($password){
                Loguear();
            }
            else{
                MostrarAlert("La contraseña es requerido.")
            }
        }
        else{
            MostrarAlert("El nombre de usuario es requerido.");
        }
    }

    Loguear = () => {
        var data = {
           "Usuario": $scope.form.user,
           "Password": $scope.form.pass
       };
      ApiServices.getWS('LOGIN', urlApiProd, data);
    }

    validar = (campo)=>{
        if(campo == undefined || campo == ""){            
            return false;
        }else{ return  true;}
    };

    MostrarAlert = (mensaje) => {
        swal({
            title: "Instituto del Patrimonio del Estado",
            text: mensaje,
            icon: "warning",
            button: "Entendido",
        });
    }

}]);
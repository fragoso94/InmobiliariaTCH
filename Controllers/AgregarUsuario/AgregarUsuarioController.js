app.controller('AgregarUsuarioController', ['$scope', '$http','ApiServices','$state','$rootScope', function ($scope, $http, ApiServices, $state, $rootScope) {
    $scope.form = {};
    $rootScope.session();
    let urlApiLocal = $rootScope.urlBase + '/Usuarios';
    let urlApiProd = $rootScope.urlBaseProd + '/Usuarios';

    ObtenerGrupos = () => {
        let url = $rootScope.urlBase + "/Catalogos/ObtenerGrupos";
        let response = ApiServices.getWS("GET", url);
        response.then(function (result){
            $scope.Roles = result;
        })
        response.catch(function (error){
            console.error(error)
        });
    };
    ObtenerGrupos(); //Obteniendo los roles

    $scope.guardarUsuario = () => {

       $nombreUsuario = validar($scope.form.usuario);
        $nombre = validar ($scope.form.nombre);
        $password = validar($scope.form.password);                
        $correo = validar ($scope.form.correo);
        $adiministrador = validar ($scope.form.admin);                             
        $clave = validar ($scope.form.clave);
        /*"IdGrupo": parseInt($scope.form.idGrupo);
        "IdDepartamento": parseInt($scope.form.idDep)*/
        if($nombreUsuario){
            if ($nombre) {
                $scope.mensajeValidacion = "";
                insertarUsuario();
            }else{
                $scope.mensajeValidacion = "El Nombre es requerido";
            }
        }
        else{
            $scope.mensajeValidacion = "El Usuario es requerido";
        }
    }    
    
    insertarUsuario = () =>
    {
        var data = {
            "NombreUsuario": $scope.form.usuario,
            "Nombre" : $scope.form.nombre,
            "Password": $scope.form.password,
            "Correo": $scope.form.correo,
            "Adiministrador": $scope.form.admin,
            "Clave": $scope.form.clave,           
            "IdGrupo": parseInt($scope.form.grupo.id),
            "IdDepartamento": parseInt($scope.form.idDep),
         };
        $scope.mensajeValidacion = "Datos necesarios"
        console.log(data);
        var respuesta = ApiServices.getWS('POST', urlApiLocal, data);
        respuesta.then(function (datos){
            console.log(datos);
            if(datos.exito){
                $state.go('listaUsuario');
            }
        })
        respuesta.catch(function(error){
            //console.log(error.data);
            let errores = error.data.errors;
            console.log(errores)
        });
    }


    validar = (campo) =>{
        if (campo == undefined || campo == "") {
            return false;            
        }else{ return true;}
    }
}]);

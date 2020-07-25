app.controller('AgregarUsuarioController', ['$scope', '$http','ApiServices','$state','$rootScope', function ($scope, $http, ApiServices, $state, $rootScope) {
    $scope.form = {};
    let urlApiProd = $rootScope.urlBaseProd + '/ObtenerUsuarios';

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
            //"ReadablePassword": $scope.form.readpass,
            "Correo": $scope.form.correo,
            "Adiministrador": $scope.form.admin,            
            //"Subsecretaria": $scope.form.subSecre,
            //"Direccion": $scope.form.direccion,                        
            "Clave": $scope.form.clave,           
            //"IdGrupo": parseInt($scope.form.idGrupo),
            //"IdDepartamento": parseInt($scope.form.idDep)
         };
         $scope.mensajeValidacion = "Datos necesarios"
        console.log(data);
            var respuesta = ApiServices.getWS('POST', urlApiProd, data);
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
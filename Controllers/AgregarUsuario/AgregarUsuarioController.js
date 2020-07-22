app.controller('AgregarUsuarioController', ['$scope', '$http','ApiServices','$state','$rootScope', function ($scope, $http, ApiServices, $state, $rootScope) {
    $scope.form = {};
    let urlApiProd = $rootScope.urlBaseProd + '/Usuarios';

    $scope.guardarUsuario = () => {        
        var data = {
            "NombreUsuario": $scope.form.usuario,
            "Nombre" : $scope.form.nombre,
            "Password": $scope.form.password,
            "ReadablePassword": $scope.form.readpass,
            "Correo": $scope.form.correo,
            "Adiministrador": $scope.form.admin,            
            "Subsecretaria": $scope.form.subSecre,
            "Direccion": $scope.form.direccion,                        
            "Clave": $scope.form.clave,           
            "IdGrupo": parseInt($scope.form.idGrupo),
            "IdDepartamento": parseInt($scope.form.idDep)
         };
        console.log(data);
            var respuesta = ApiServices.getWS('POST', urlApiProd, data);
            respuesta.then(function (datos){
                console.log(datos);
                if(datos.exito){
                    $state.go('login');
                }
            })
            respuesta.catch(function(error){
                //console.log(error.data);
                let errores = error.data.errors;
                console.log(errores)
        });
    }
    
}]);
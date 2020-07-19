app.controller('AgregarUsuarioController', ['$scope', '$http','ApiServices','$state','$rootScope', function ($scope, $http, ApiServices, $state, $rootScope) {
    $scope.form = {};
    
    let urlApiProd = $rootScope.urlBaseProd + '/Usuarios';    

    $scope.guardarUsuario = () => {        
        var data = {
            "NombreUsuario": $scope.form.usuario,
            "Nombre" : $scope.form.nombre,
            "Password": $scope.form.password,
            "RedeablePassword": $scope.form.readable,
            "Correo": $scope.form.correo,
            "Adiministrador": $scope.form.admin,            
            "Subsecretaria": $scope.form.subSecre,
            "Direccion": $scope.form.direccion,                        
            "Clave": $scope.form.clave,           
            "IdGrupo": $scope.form.idGrupo,            
            "IdDepartamento": $scope.form.idDep       

         }; 
         console.log (data);
                    var respuesta = ApiServices.getWS('POST', urlApiProd, data);
                    respuesta.then(function (datos){
                        console.log(datos);
                        $scope.Usuarios =datos;
                    })
                    respuesta.catch(function(error){
                    
                });
    }
    
}]);
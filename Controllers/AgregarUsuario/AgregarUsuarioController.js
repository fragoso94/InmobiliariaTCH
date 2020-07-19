app.controller('AgregarUsuarioController', ['$scope', '$http','$state','$rootScope', function ($scope, $http,$state, $rootScope) {
    $scope.form = {};
    $rootScope.session();

    $scope.agregarUsuario = () => {

    };

    /*function InsertarUsuario(data) {
        console.log(data);
        let usuario = {
            "Login": data.usuario,
            "Nombre": data.nombre,
            "Password": data.password,
            "Readable_Password": data.readable,
            "Correo": data.correo,
            "Clave": data.clave,
            "Id_Grupo": data.idGrupo,
            "Id_Dep": data.idDep,
        };

        let peticion = $http({
            method: "POST",
            url: "https://localhost:44321/Api/Usuario/",
            data: usuario
        });


        peticion.then(function (response) {
            console.log(response.data);
            if (response.data.Exito == true)
            {
                swal(response.data.Mensaje, "Finalizar", "success");
                //$state.go('login');
            }
        }, function (response) {
            console.error(response);
        });
    };*/



}]);
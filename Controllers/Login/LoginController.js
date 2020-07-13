app.controller('LoginController', ['$scope','$state','$http', function ($scope,$state, $http) {
    $scope.form = {};

    $scope.login = () => {
        Autenticar($scope.form.user, $scope.form.pass);
    };

    function Autenticar(user, pass) {
        console.log (user, pass)
        let peticion = $http({
            method: "POST",
            url: "https://localhost:44321/Api/Auth/",
            data:
            {
                "Login": user,
                "Password": pass
            }
        });

        peticion.then(function (response) {
            console.log(response);
            if (response.data != null)
            { 
                if (response.data.Estado == 1) {
                    $state.go('home');
                }
                else {
                    console.warn("El usuario o contraseña es incorrecta.");
                    $scope.mensajeValidacion = "El usuario o contraseña es incorrecta";
                }
            }
        }, function (response) {
            console.error(response);
        });
    };

}]);
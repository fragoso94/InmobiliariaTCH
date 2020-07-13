app.controller("bienesController",['$scope', function($scope) {
    $scope.form = {};
    $scope.agregar = () => {
        let ubicacion = document.querySelector('#fileUbicacion').files[0];
        let croquis = document.querySelector('#fileCroquis').files[0];
        let memoriaFotografica = document.querySelector('#fileMemoriaFotografica').files[0];
        let datos = {
            'municipio': $scope.form.municipio,
            'tipoInmueble': $scope.form.tipoInmueble,
            'usoInmueble': $scope.form.usoInmueble,
            'superficieTerreno': $scope.form.superficieTerreno,
            'superficieConstruido': $scope.form.superficieConstruido,
            'norte': $scope.form.norte,
            'sur': $scope.form.sur,
            'oriente': $scope.form.oriente,
            'poniente': $scope.form.poniente,
            'ubicacion': {
                'nombre': ubicacion.name,
                'tamanio': ubicacion.size,
                'tipo': ubicacion.type,
            },
            'croquis': {
                'nombre': croquis.name,
                'tamanio': croquis.size,
                'tipo': croquis.type,
            },
            'memoria': {
                'nombre': memoriaFotografica.name,
                'tamanio': memoriaFotografica.size,
                'tipo': memoriaFotografica.type,
            },
            'observacion': $scope.form.observacion,
            'tipoFormato': $scope.form.tipoFormato,
        };
        $http({method: 'POST', url: '', data: datos })
            .then(function (response) {
                console.log(response);
            }, function (response) {
                console.error(response);
            });
    };


}]);
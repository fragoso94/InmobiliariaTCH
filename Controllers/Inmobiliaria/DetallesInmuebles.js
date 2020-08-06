app.controller('InmobiliariaController',['$scope','$state', '$http', 'ApiServices', '$rootScope', function ($scope, $state, $http, ApiServices, $rootScope) {    
    let urlApiProd = $rootScope.urlBaseProd + '/Inmuebles/detallesInmuebles';
    $rootScope.session();

}]);
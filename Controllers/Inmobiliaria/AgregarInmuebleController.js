app.controller('AgregarInmuebleController', ["$scope","$state", 'ApiServices', "$rootScope", function ($scope, $state, ApiServices, $rootScope) {
    $scope.form = {};
    $rootScope.session();
    let urlApiLocal = $rootScope.urlBase + '/Usuarios';
    let urlApiProd = $rootScope.urlBaseProd + '/Usuarios';

    $(document).ready(function(){
        $('ul.tabs li a:first').addClass('active');
        $('.secciones article').hide();
        $('.secciones article:first').show();
    
        $('ul.tabs li a').click(function(){
            $('ul.tabs li a').removeClass('active');
            $(this).addClass('active');
            $('.secciones article').hide();
    
            var activeTab = $(this).attr('href');
            $(activeTab).show();
            return false;
        });
    });

       ObtenerTipoExpediente = ()=> {
            let url = $rootScope.urlBase + "/Catalogos/ObtenerTipoExpedientes";
            let response = ApiServices.getWS("GET", url);
            response.then(function (result){
                console.log(result);
                $scope.TipoExpediente = result;
            })
            response.catch(function (error){
                console.error(error)
            });
        };
        ObtenerTipoExpediente(); //Obteniendo tipo de Expedientes

        ObtenerTipoInmueble = ()=> {
            let url = $rootScope.urlBase + "/Catalogos/ObtenerTipoInmuebles";
            let response = ApiServices.getWS("GET", url);
            response.then(function (result){
                console.log(result);
                $scope.TipoInmuebles = result;
            })
            response.catch(function (error){
                console.error(error)
            });
        };
        ObtenerTipoInmueble(); //Obteniendo tipo de Inmuebles
        
        ObtenerMunicipios = ()=> {
            let url = $rootScope.urlBase + "/Catalogos/ObtenerMunicipios";
            let response = ApiServices.getWS("GET", url);
            response.then(function (result){
                console.log(result);
                $scope.Municipios = result;
            })
            response.catch(function (error){
                console.error(error)
            });
        };
        ObtenerMunicipios(); //Obteniendo Municipios

        ObtenerClasificacionPredios = ()=> {
            let url = $rootScope.urlBase + "/Catalogos/ObtenerClasificacionPredios";
            let response = ApiServices.getWS("GET", url);
            response.then(function (result){
                console.log(result);
                $scope.ClasificacionPredios = result;
            })
            response.catch(function (error){
                console.error(error)
            });
        };
        ObtenerClasificacionPredios(); //Obteniendo Clasificación de Predios

        ObtenerTipoPredios = ()=> {
            let url = $rootScope.urlBase + "/Catalogos/ObtenerTipoPredios";
            let response = ApiServices.getWS("GET", url);
            response.then(function (result){
                console.log(result);
                $scope.TipoPredios = result;
            })
            response.catch(function (error){
                console.error(error)
            });
        };
        ObtenerTipoPredios(); //Obteniendo tipo de Predios

        ObtenerTipoAdquisicion = ()=> {
            let url = $rootScope.urlBase + "/Catalogos/ObtenerTipoAdquisicion";
            let response = ApiServices.getWS("GET", url);
            response.then(function (result){
                console.log(result);
                $scope.TipoAdquisicion = result;
            })
            response.catch(function (error){
                console.error(error)
            });
        };
        ObtenerTipoAdquisicion(); //Obteniendo tipo de Adquisición

        ObtenerTomos = ()=> {
            let url = $rootScope.urlBase + "/Catalogos/ObtenerTomos";
            let response = ApiServices.getWS("GET", url);
            response.then(function (result){
                console.log(result);
                $scope.Tomos = result;
            })
            response.catch(function (error){
                console.error(error)
            });
        };
        ObtenerTomos(); //Obteniendo Tomos       

        ObtenerLugaresRegionales = ()=> {
            let url = $rootScope.urlBase + "/Catalogos/ObtenerLugaresRegionales";
            let response = ApiServices.getWS("GET", url);
            response.then(function (result){
                console.log(result);
                $scope.LugaresRegionales = result;
            })
            response.catch(function (error){
                console.error(error)
            });
        };
        ObtenerLugaresRegionales(); //Obteniendo Lugares Regionales

    $scope.AgregarInmueble = () =>{
        console.log($scope.form);
    }

}]);

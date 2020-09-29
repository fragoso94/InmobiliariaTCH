app.controller('InmobiliariaController',['$scope','$state', '$http', 'ApiServices', '$rootScope', function ($scope, $state, $http, ApiServices, $rootScope) {
    let urlApiLocal = $rootScope.urlBase + '/Inmuebles';
    let urlApiProd = $rootScope.urlBaseProd + '/Inmuebles/ObtenerInmuebles';
    $rootScope.session();
    $scope.totalPagina = 20;
    $scope.paginaActual = 1;
    $scope.form = {};
    let busqueda = "";
    //let listaBusqueda = []; //arreglo donde se almacenará todos los registros para su posterior búsqueda.
    $scope.InstrumentosJuridicos = [
        {
            "id": 0,
            "descripcion": "Seleccionar"
        },
        {
            "id": 1,
            "descripcion": "Comodatos"
        },
        {
            "id": 2,
            "descripcion": "Acta de Entrega"
        }
    ];

    $scope.buscar = (form) =>
    {
        if(form){
            busqueda = $scope.form.nombre;
            ObtenerInmuebles(busqueda);
        }
        else{
            swal({
                title: "Sistema",
                text: "El dato a buscar es requerida.!",
                icon: "warning",
                button: "Entendido!",
            });
        }
    }
    //llamando al servicio que devuelve una promesa con los datos de inmuebles.
    ObtenerInmuebles = (texto = "") => {
        console.log("busqueda:", texto);
        let datos = {
            "total": $scope.totalPagina,
            "paginaActual": $scope.paginaActual
        }
        let response;
        if(texto === ""){
            response = ApiServices.getWS('POST', urlApiLocal + "/ObtenerInmuebles", datos);
        }
        else{
            response = ApiServices.getWS('POST', urlApiLocal + "/BuscarInmueble/" + texto, datos);
        }
        response.then(function(data){
            console.log(data)
            $scope.inmuebles = data;
            data.forEach(item => {
                let total = (item.cantidad/$scope.totalPagina);
                $scope.paginas = Math.ceil(total);
                //listaBusqueda.push(item);
            })
        })
        response.catch(function(error){
            console.log(error);
        })
    };
   ObtenerInmuebles();

   // $scope.buscar = (e) =>
   // {
   //     if(listaBusqueda.length != 0){
   //         const found = listaBusqueda.find(element => {
   //             if(parseInt(element.id) == 2){
   //                 console.log(element)
   //             }
   //         });
   //     }
   //     console.log(found);
   // };

    $scope.Anterior = () => {
        $scope.paginaActual--;
        if(busqueda !== "") ObtenerInmuebles();
        else ObtenerInmuebles(busqueda);
    }
    $scope.Siguiente = () =>{
        $scope.paginaActual++;
        if(busqueda !== "") ObtenerInmuebles();
        else ObtenerInmuebles(busqueda);
    }
    $scope.agregarInmueble = ()=>{
        console.log(texto);
        $state.go('agregarInmueble');
    };

    $scope.ModificarHerramientaJuridica = (id, clave) =>
    {
        if(clave !== 0){
            let datos = { "IdExpediente": id, "IdHerramientaJuridica": clave}
            let response = ApiServices.getWS('POST',urlApiLocal + "/ModificarHerramientaJuridica", datos);
            response.then(function (res) {
                if(res.exito)
                {
                    swal({
                        title: "Sistema",
                        text: res.mensaje,
                        icon: "success",
                        button: "Entendido!",
                    });
                    ObtenerInmuebles();
                }
            })
            response.catch(function (error) {
                console.log(error);
            })
        }else {
            swal({
                title: "Sistema",
                text: "El instrumento Jurídico es requerido.!",
                icon: "warning",
                button: "Entendido!",
            });
        }

    };

    $scope.irDetalle = (id) =>
    {
        $state.go('detalleInmueble', {"id": id});
    };

}]);

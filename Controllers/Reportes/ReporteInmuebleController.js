app.controller('ReporteInmuebleController',['$scope','$state', 'ApiServices', '$rootScope', function ($scope, $state, ApiServices, $rootScope) {
    let urlApiLocal = $rootScope.urlBase + '/Reportes/ObtenerReporteInmueble/121';
    //https://localhost:44312/api/Reportes/ObtenerReporteInmueble/121
    $rootScope.session();

    ObtenerReporte = () =>{
        let response = ApiServices.getWS('GET', urlApiLocal);
        response.then(function (res){
            console.log(res);
            $scope.Inmuebles = res;
        });
        response.catch(function (error) {
            console.log(error);
        })
    }
    ObtenerReporte();

    $scope.generarPDF = () => {
        var doc = new jsPDF();

        doc.setFontSize(14);
        doc.rect(10, 10, 100, 15); // empty square
        doc.text('Reporte detallado del Inmueble',50, 10,'','','center');

        doc.setFontSize(12);
        $scope.Inmuebles.forEach( (item)=> {
            doc.text("Expediente", 10, 20);
            doc.text(item.idExpediente.toString(), 10, 25);
            doc.text("Tipo de Inmueble", 50, 20);
            doc.text(item.tipoInmueble, 50, 25);
            doc.text("Clave catastral", 100, 20);
            doc.text(item.claveCatastral.toString(), 100, 25);
        });
        doc.save('reporteInmueble.pdf');
        // var string = doc.output('datauristring');
        // var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
        // var x = window.open();
        // x.document.open('','Listado');
        // x.document.write(iframe);
        // x.document.close();
    }

}]);




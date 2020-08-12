app.filter('ctime', function ($filter) {
    return function (jsonDate) {
        if (jsonDate === null) { return ""; }
        var fecha = jsonDate.substring(6);
        var fechaString = new Date(parseInt(fecha));
        var mes = fechaString.getMonth() + 1;
        var dia = fechaString.getDate();
        var ano = fechaString.getFullYear();
        if (dia < 10) {
            dia = '0' + dia;
        }
        else {
            dia = dia;
        }

        if (mes < 10) {
            mes = '0' + mes;
        }
        else {
            mes = mes;
        }
        var fechaConversion = dia + "/" + mes + "/" + ano;
        return fechaConversion;
    };
});

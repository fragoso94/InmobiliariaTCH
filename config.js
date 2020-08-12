var app = angular.module('AppInmobiliaria', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

    let login = {
        name: 'login',
        url: '/login',
        templateUrl: 'Views/Templates/login.html',
        controller: 'LoginController'
    };
    let inmobiliaria = {
        name: 'inmobiliaria',
        url: '/inmobiliaria',
        templateUrl: 'Views/Custom/contenedorInmobiliaria.html',
        controller: 'InmobiliariaController'
    };
    let agregarInmueble = {
        name: 'agregarInmueble',
        url: '/agregarInmueble',
        templateUrl: 'Views/Custom/contenedorAgregarInmueble.html',
        controller: 'AgregarInmuebleController'
    };

    let agregarUsuario = {
        name: 'agregarUsuario',
        url: '/agregarUsuario',
        templateUrl: 'Views/Custom/contenedorAgregarUsuario.html',
        controller: 'AgregarUsuarioController'
    };

    let listaUsuario = {
        name: 'listaUsuario',
        url: '/listaUsuario',
        templateUrl: 'Views/Custom/contenedorListaUsuario.html',
        controller: 'ListarUsuarioController'
    };

    let home = {
        name: 'home',
        url: '/home',
        templateUrl: 'Views/Templates/menu.html'
    }

    let seguridad = {
        name: 'seguridad',
        url: '/seguridad',
        templateUrl: 'Views/Custom/contenedorSeguridad.html',
        controller: 'SeguridadController'
    }

    let catalogos = {
        name: 'catalogos',
        url: '/catalogos',
        templateUrl: 'Views/Custom/contenedorCatalogos.html'
    }

    $stateProvider.state(home);
    $stateProvider.state(login);
    $stateProvider.state(inmobiliaria);
    $stateProvider.state(agregarInmueble);
    $stateProvider.state(agregarUsuario);
    $stateProvider.state(listaUsuario);
    $stateProvider.state(seguridad);
    $stateProvider.state(catalogos);

    //$urlRouterProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/login');
});

app.run(function($rootScope, ApiServices, $state) {
    $rootScope.urlBase = 'https://localhost:44312/api';
    $rootScope.urlBaseProd = 'https://apiinmobiliariatch.azurewebsites.net/api';

    $rootScope.logout = () => {
        ApiServices.logout();
        localStorage.removeItem('idUsuario');
        localStorage.removeItem('usuario');
        localStorage.removeItem('estado');
        localStorage.removeItem('token');
    };

    $rootScope.session = () => {
        let cantgoback = ApiServices.islogged();
        if (cantgoback.estado == 1) {
            localStorage.setItem('idUsuario', cantgoback.idUsuario)
            localStorage.setItem('usuario', cantgoback.usuario);
            localStorage.setItem('estado', cantgoback.estado);
            localStorage.setItem('token', cantgoback.token);
            $rootScope.usuarioActual = localStorage.getItem('usuario');
            console.log("Config: ",cantgoback);
        } else {
            $rootScope.usuarioActual = localStorage.getItem('usuario');
            estadoActual = localStorage.getItem("estado");
            console.log("estatus: ", estadoActual);
            if(estadoActual != 1){
                console.log("no autenticado");
                $state.go('login');
            }
        }
    };

});

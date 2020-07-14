var app = angular.module('AppInmobiliaria', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    let home = {
    name: 'home',
    url: '/home',
    templateUrl: 'Views/Custom/contenedorHome.html',
    controller: 'HomeController'  
};
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
        templateUrl: 'Views/Custom/contenedorAgregarInmueble.html'
        //controller: 'InmobiliariaController'
    };

    let agregarUsuario = {
        name: 'agregarUsuario',
        url: '/agregarUsuario',
        templateUrl: 'Views/Custom/contenedorAgregarUsuario.html',
        controller: 'AgregarUsuarioController'
    };

    $stateProvider.state(home);
    $stateProvider.state(login);
    $stateProvider.state(inmobiliaria);
    $stateProvider.state(agregarInmueble);
    $stateProvider.state(agregarUsuario);

    //$urlRouterProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/login');
});
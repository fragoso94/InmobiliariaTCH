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
    let bienes = {
        name: 'bienes',
        url: '/bienes',
        templateUrl: 'Views/Templates/Bienes/bienes.html',
        controller: 'BienesController'
    };
    let agregarUsuario = {
        name: 'agregarUsuario',
        url: '/agregarUsuario',
        templateUrl: 'Views/Templates/AgregarUusario/AgregarUusario.html',
        controller: 'AgregarUsuarioController'
    };

    $stateProvider.state(home);
    $stateProvider.state(login);
    $stateProvider.state(bienes);
    $stateProvider.state(agregarUsuario);

    $urlRouterProvider.otherwise('/login');
});
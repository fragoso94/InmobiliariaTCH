
var app = angular.module('AppInmobiliaria',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    let home = {
        name: 'home',
        url: '/home',
        templateUrl: 'Views/Custom/ContenedorHome.html',
        controller: 'HomeController'
    };
    let login = {
        name: 'login',
        url: '/login',
        templateUrl: 'Views/Templates/Login/login.html',
        controller: 'LoginController'
    };


    $stateProvider.state(home);
    $stateProvider.state(login);

    $urlRouterProvider.otherwise('/login');

});

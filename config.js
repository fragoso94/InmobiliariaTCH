var app = angular.module('AppInmobiliaria', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    let home = {
    name: 'home',
    url: '/home',
    templateUrl: 'Views/Custom/ContenedorHome.html',
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

    $stateProvider.state(home);
    $stateProvider.state(login);
    $stateProvider.state(inmobiliaria);
    $stateProvider.state(agregarInmueble);
    $stateProvider.state(agregarUsuario);
    $stateProvider.state(listaUsuario);

    //$urlRouterProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/login');
});

app.run(function($rootScope, ApiServices, $state) {
    $rootScope.urlBase = 'https://localhost:44312/api';
    $rootScope.urlBaseProd = 'https://apiinmobiliariatch.azurewebsites.net/api';
    

    $rootScope.logout = () => {
        ApiServices.logout();
        localStorage.removeItem('usuario');
        localStorage.removeItem('estado');
    };

    $rootScope.session = () => {
        let cantgoback = ApiServices.islogged();
        if (cantgoback.estado == 1) {
            localStorage.setItem('usuario', cantgoback.usuario);
            localStorage.setItem('estado', cantgoback.estado);
            localStorage.setItem('token', cantgoback.token);
            $rootScope.usuarioActual = localStorage.getItem('usuario');
            //console.log("autenticado");
            //console.log($rootScope.usuarioActual);
        } else {
            $rootScope.usuarioActual = localStorage.getItem('usuario');
            estadoActual = localStorage.getItem("estado");
            if(estadoActual != 1){
                console.log("no autenticado");
                $state.go('login');
            }
        }
    };

});
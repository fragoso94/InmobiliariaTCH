app.controller('AgregarInmuebleController', ["$scope","$state","$rootScope", function ($scope, $state, $rootScope) {
    $scope.form = {};
    $rootScope.session();    

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

    $scope.AgregarInmueble = () =>{
        console.log($scope.form);
    }

}]);

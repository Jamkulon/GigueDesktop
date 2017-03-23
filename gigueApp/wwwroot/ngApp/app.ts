namespace gigueApp {

    angular.module('gigueApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: gigueApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about/:id',
                templateUrl: '/ngApp/views/about.html',
                controller: gigueApp.Controllers.AboutController,
                controllerAs: 'controller'
            })

            .state(`addMusician`, {
                url: `/addMusician`,
                templateUrl: `/ngApp/views/addMusician.html`,
                controller: gigueApp.Controllers.addMusicianController,
                controllerAs: `controller`
            })



            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}

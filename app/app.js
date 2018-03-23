var app = angular.module('max-app', ['ngRoute']);

app.run(function () {

});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/templates/home.html',
        controller: 'HomeCtrl'
    })
});
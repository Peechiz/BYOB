var app = angular.module( "myApp", [ 'ngRoute' ] );
//
console.log( "angular here" );
//
app.config( function ( $routeProvider ) {
    $routeProvider.when( '/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    } )

    .when( '/profile', {
        templateUrl: '/partials/profile.html',
        controller: 'ProfileController'
    } );
} );

app.controller( 'HomeController', function ( $scope ) {
    console.log( 'hey' );
    $scope.view = {};
    $scope.view.message = "testing here!"
} );

app.controller( "ProfileController", function ( $scope ) {
    console.log( "profile here" );
    $scope.view = {};
    $scope.view.message = "testing profile!";
    $scope.view.name = "Jack";
    $scope.data = {};
    $scope.data.searchbeer = '';
    $scope.data.searchBrewery = '';

    $scope.beers = [
        {
            name: 'Zoe',
            brewery: 'Hops and Grain Brewing',
            style: 'Amber',
            price: 3.50
      },

        {
            name: 'Sierra Nevada',
            brewery: 'Sierra Nevada Brewery',
            style: 'Pale Ale',
            price: 4.00
      },
        {
            name: 'Shock Top Belgium Wht',
            brewery: 'Anheuser-Busch',
            style: 'Witbier',
            price: 5.00
      }
   ];

    $scope.hide = function () {
        $scope.showMe = !$scope.showMe;
    }

} );

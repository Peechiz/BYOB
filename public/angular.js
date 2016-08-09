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
    $scope.searchBeer = '';

    $scope.beers = [
        {
            name: 'Zoe',
            brewery: 'Hops and Grain Brewing',
            style: 'Amber'
      },

        {
            name: 'Sierra Nevada',
            brewery: 'Sierra Nevada Brewery',
            style: 'Pale Ale'
      },
        {
            name: 'Shock Top Belgium Wht',
            brewery: 'Anheuser-Busch',
            style: 'Witbier'
      }
   ];

    $scope.hide = function () {
        $scope.showMe = !$scope.showMe;
    }

} );

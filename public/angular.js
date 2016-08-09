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
        templateUrl: 'partials/profile.html',
        controller: 'ProfileController'
    } )

    .when( '/beer', {
        templateUrl: '/public/partials/beer.html',
        controller: 'BeerController'
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

    $scope.form = function () {
        $scope.hideMe = !$scope.hideMe;
    }

} );

app.controller( 'BeerController', function ( $scope ) {
    console.log( "beer here" );
} );

app.controller( 'FriendsController', function ( $scope ) {
    console.log( "friends here" );
} )

app.controller( 'partyController', function ( $scope ) {
    console.log( "Lets party" );
} )

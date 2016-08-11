var app = angular.module( "myApp", [ 'ngRoute' ] );

// function db() {
//     $.ajax( {
//         type: "POST",
//         url: 'http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/users',
//         data: '',
//         success: function () {
//             console.log( "hello Erika" );
//         }
//     } )
// };


var urlUsers = "http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/users";
var urlBeers = "http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/beers"
console.log( urlUsers );
console.log( urlBeers );
console.log( "angular working here" );

app.config( function ( $routeProvider ) {
    $routeProvider.when( '/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileController'
    } )

    .when( '/party', {
        templateUrl: 'partials/party.html',
        controller: 'PartyController'
    } )

    .when( '/beer', {
            templateUrl: 'partials/beer.html',
            controller: 'BeerController'
        } )
        .when( '/users', {
            templateUrl: 'partials/users.html',
            controller: 'UserController'
        } );
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
            abn: 3.50
      },

        {
            name: 'Sierra Nevada',
            brewery: 'Sierra Nevada Brewery',
            style: 'Pale Ale',
            abn: 4.00
      },
        {
            name: 'Shock Top Belgium Wht',
            brewery: 'Anheuser-Busch',
            style: 'Witbier',
            abn: 5.00
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

    $scope.beers = [
        {
            name: 'Zoe',
            brewery: 'Hops and Grain Brewing',
            style: 'Amber',
            abn: 3.50
     },

        {
            name: 'Sierra Nevada',
            brewery: 'Sierra Nevada Brewery',
            style: 'Pale Ale',
            abn: 4.00
     },
        {
            name: 'Shock Top Belgium Wht',
            brewery: 'Anheuser-Busch',
            style: 'Witbier',
            abn: 5.00
     },
        {
            name: 'Leinenkugels',
            brewery: 'Jacob Leinenkugel Brewing Company',
            style: 'Berliner Weissbier',
            abn: 3.29
     }
  ];


    console.log( "beer here" );
    $scope.data = {};
    $scope.data.searchbeers = '';
    $scope.data.searchBreweries = '';
    $scope.newBeers = [];

    $scope.addBeer = function () {
        var newBeer = {};
        newBeer.name = $scope.newBeers.name;
        newBeer.brewery = $scope.newBeers.brewery;
        newBeer.style = $scope.newBeers.style;

        $scope.newBeers.push( newBeer );
        console.log( "im a new beer!" );
        reset();

    }

    function reset( something ) {
        $scope.beer.name = null;
        $scope.brewery = null;
        $scope.style = null;
        $scope.beer.abn = null;
        console.log( "cleaning the house yo!" );
    }

    $scope.hide = function () {
        $scope.showMe = !$scope.showMe;
    }


} );

app.controller( 'FriendsController', function ( $scope ) {
    console.log( "friends here" );

    $scope.friends = [
        {
            name: 'Chris',
            favorite_beers: [ 'Zoe', 'Sierra Nevada' ]
   },
        {
            name: 'Erika',
            favorite_beers: [ 'Tecate', ' Leinenkugels' ]
   },
        {
            name: 'Zubair',
            favorite_beers: [ 'Sierra Nevada' ]
   },
        {
            name: 'Marc',
            favorite_beers: [ 'Bull Light' ]
   }
   ];
} );

app.controller( 'partyController', function ( $scope ) {
    console.log( "Lets party" );
} );

app.controller( 'UserController', function ( $scope, $http ) {
    console.log( "user here" );
    $scope.data = null;
    $scope.dataService = null;
    $scope.search = 'users';
    var users = [];
    $http.defaults.headers.common[ "X-Custom-Header" ] = "Angular.js";



    $http.get( "http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/users" )
        .success( function ( data, status, headers, config ) {

            // config.EnableCors();

            // dataType: 'jsonp',
            $scope.users = data;
            console.log( data );
        } );

} );

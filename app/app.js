"use strict";
console.log("app.js here");
// app.js file defines our app
var app =  angular.module("parkNash", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

$routeProvider.

when("/parknashville/", {
  templateUrl: "/parknashville/partials/mainList.html",
  controller: "listCtrl"
}).
when("/downtown", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "downtownCtrl"
}).
when("/EightSouth", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "EightSouthCtrl"
}).
when("/westend", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "westendCtrl"
}).
when("/fivepoints", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "fivepointsCtrl"
}).
when("/twelvesouth", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "twelvesouthCtrl"
}).
when("/hillsborovillage", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "hillsborovillageCtrl"
}).
when("/greenhills", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "greenhillsCtrl"
}).
when("/germantown", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "germantownCtrl"
}).
when("/thegulch", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "thegulchCtrl"
}).
when("/musicrow", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "musicrowCtrl"
}).
when("/onehundredoaks", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "onehundredoaksCtrl"
}).
when("/edgehill", {
  templateUrl: "/parknashville/partials/mapview.html",
  controller: "edgehillCtrl"
}).
otherwise("/parknashville/");
})
.run(function($rootScope, $location) {

    $rootScope.$on('$routeChangeStart', function (event, next, prev) {
        console.log('state changed!');
    });

  });

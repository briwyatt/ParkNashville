"use strict";
console.log("app.js here");
// app.js file defines our app
var app =  angular.module("parkNash", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

$routeProvider.

when("/parknashville/", {
  templateUrl: "/parknashville/partialsmainList.html",
  controller: "listCtrl"
}).
when("/downtown", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "downtownCtrl"
}).
when("/EightSouth", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "EightSouthCtrl"
}).
when("/westend", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "westendCtrl"
}).
when("/fivepoints", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "fivepointsCtrl"
}).
when("/twelvesouth", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "twelvesouthCtrl"
}).
when("/hillsborovillage", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "hillsborovillageCtrl"
}).
when("/greenhills", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "greenhillsCtrl"
}).
when("/germantown", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "germantownCtrl"
}).
when("/thegulch", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "thegulchCtrl"
}).
when("/musicrow", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "musicrowCtrl"
}).
when("/onehundredoaks", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "onehundredoaksCtrl"
}).
when("/edgehill", {
  templateUrl: "/parknashville/partialsmapview.html",
  controller: "edgehillCtrl"
}).
otherwise("/");
})
.run(function($rootScope, $location) {

    $rootScope.$on('$routeChangeStart', function (event, next, prev) {
        console.log('state changed!');
    });

  });

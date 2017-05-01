"use strict";
app.controller("listCtrl", function($scope){


  function ListController() {
    var vm = this;  //vm stands for "viewmodel"
      vm.data = $scope.neighborhoods;
      vm.search = "";

  }



$scope.neighborhoods = [
  {
    name: "8th Ave South",
    img_url: "/parknashville/img/melrose.jpg",
    zipcodes: "37204, 37203",
    landmarks: "WO Smith Music School, Melrose Billards, Sinema, The Sutler, Zanies Comedy Club",
    href: "EightSouth"
  },
  {
    name: "5 Points",
    img_url: "/parknashville/img/fivePoints.jpg",
    zipcodes: "37206, 37216",
    landmarks: "Five Points Pizza, The Basement East, Lipstick Lounge, Marché Artisan Foods, The 5 Spot",
    href: "fivepoints"
  },
  {
    name: "12 South",
    img_url: "/parknashville/img/12South.jpg",
    zipcodes: "37204, 37212",
    landmarks: "Servier Park, Halcyon Bike Shop, Taqueria del Sol, Frothy Monkey, Craft South, Draper James",
    href: "twelvesouth"
  },
  {
    name: "West End",
    img_url: "/parknashville/img/westend.jpg",
    zipcodes: "37208, 37203",
    landmarks: "Centennial Park, Exit/In, The End, Corner Bar, St. Thomas Midtown Hospital",
    href: "westend"
  },
  {
    name: "Green Hills",
    img_url: "/parknashville/img/greenhills.jpg",
    zipcodes: "37215, 37204",
    landmarks: "Green Hills Mall, Bluebird Cafe, Greenhouse Bar, Lipscomb University",
    href: "greenhills"
  },
  {
    name: "Music Row",
    img_url: "/parknashville/img/musicrow.jpg",
    zipcodes: "37203, 37212",
    landmarks: "Bobby's Idle Hour, Red Door Saloon, Losers Bar, The Patterson House, Ocean Way Studio",
    href: "musicrow"
  },
  {
    name: "Germantown",
    img_url: "/parknashville/img/germantown.jpg",
    zipcodes: "37208",
    landmarks: "5th & Taylor, Rolf and Daughters, Monells, City House, Red Bicycle Coffee & Crepes",
    href: "germantown"
  },
  {
    name: "The Gulch",
    img_url: "/parknashville/img/thegulch.jpg",
    zipcodes: "37203",
    landmarks: "The Turnip Truck, Biscuit Love, Barista Parlour, Third Man Records, Bar Louie, Mercy Lounge",
    href: "thegulch"
  },
  {
    name: "Downtown",
    img_url: "/parknashville/img/downtown.jpg",
    zipcodes: "37219, 37201, 37203",
    landmarks: "Tennessee State Capitol, Printers Alley, Bridgestone Arena, Ryman Auditorium, AT&T Building",
    href: "downtown"
  },
  {
    name: "100 Oaks",
    img_url: "/parknashville/img/onehundredoaks.jpg",
    zipcodes: "37204, 37211",
    landmarks: "One Hundred Oaks Mall, Regal Cinema, Guitar Center, Nadeau Furniture, Flatrock Coffee",
    href: "onehundredoaks"
  },
  {
    name: "Edgehill",
    img_url: "/parknashville/img/edgehill.jpg",
    zipcodes: "37212",
    landmarks: "Bella Napoli Pizza, Taco Mamacita, Warby Parker, Edgehill Cafe, Dulce Desserts, Castilleja",
    href: "edgehill"
  },
  {
    name: "Hillsboro Village",
    img_url: "/parknashville/img/hillsboroVillage.jpg",
    zipcodes: "37212, 37204",
    landmarks: "Dragon Park, Vanderbilt University, Belcourt Theatre, Vanderbilt University Medical Center, Fido Cafe",
    href: "hillsborovillage"
  }
];
});
       "use strict";

       app.factory("styleFactory", function() {
                   // let mapStyle = new google.maps.Map(document.getElementById('map'), {
                   //     center: {
                   //         lat: 36.1605985,
                   //         lng: -86.7798273
                   //     },
                   //     zoom: 16,
                   //     zoomControl:false,
               
                      var  styles  = [{
                           "featureType": "administrative",
                           "elementType": "labels",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "administrative.country",
                           "elementType": "geometry.stroke",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "administrative.province",
                           "elementType": "geometry.stroke",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "landscape",
                           "elementType": "geometry",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "color": "#e3e3e3"
                           }]
                       }, {
                           "featureType": "landscape.natural",
                           "elementType": "labels",
                           "stylers": [{
                               "visibility": "off"
                           }]
                       }, {
                           "featureType": "poi",
                           "elementType": "all",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "poi.attraction",
                           "elementType": "geometry.fill",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "hue": "#ff0000"
                           }, {
                               "saturation": "58"
                           }, {
                               "weight": "0.01"
                           }]
                       }, {
                           "featureType": "poi.attraction",
                           "elementType": "labels.text",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "poi.park",
                           "elementType": "geometry",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "poi.place_of_worship",
                           "elementType": "geometry",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "road",
                           "elementType": "geometry.fill",
                           "stylers": [{
                               "color": "#000000"
                           }]
                       }, {
                           "featureType": "road",
                           "elementType": "labels",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "road.highway",
                           "elementType": "geometry",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "color": "#998d8d"
                           }]
                       }, {
                           "featureType": "road.highway.controlled_access",
                           "elementType": "geometry",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "road.arterial",
                           "elementType": "geometry",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }, {
                           "featureType": "road.arterial",
                           "elementType": "geometry.fill",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "color": "#c9c9c9"
                           }]
                       }, {
                           "featureType": "road.local",
                           "elementType": "geometry",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "color": "#000000"
                           }]
                       }, {
                           "featureType": "transit",
                           "elementType": "labels.icon",
                           "stylers": [{
                               "visibility": "off"
                           }]
                       }, {
                           "featureType": "transit.line",
                           "elementType": "geometry",
                           "stylers": [{
                               "visibility": "off"
                           }]
                       }, {
                           "featureType": "transit.line",
                           "elementType": "geometry.fill",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "color": "#fd4949"
                           }]
                       }, {
                           "featureType": "transit.line",
                           "elementType": "labels.text",
                           "stylers": [{
                               "visibility": "off"
                           }]
                       }, {
                           "featureType": "transit.station.airport",
                           "elementType": "geometry",
                           "stylers": [{
                               "visibility": "off"
                           }]
                       }, {
                           "featureType": "transit.station.airport",
                           "elementType": "geometry.fill",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "color": "#ff0000"
                           }, {
                               "saturation": "-4"
                           }, {
                               "lightness": "43"
                           }]
                       }, {
                           "featureType": "transit.station.airport",
                           "elementType": "labels",
                           "stylers": [{
                               "visibility": "off"
                           }]
                       }, {
                           "featureType": "transit.station.bus",
                           "elementType": "geometry.fill",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "color": "#990000"
                           }]
                       }, {
                           "featureType": "transit.station.rail",
                           "elementType": "geometry.fill",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "color": "#ed0000"
                           }]
                       }, {
                           "featureType": "water",
                           "elementType": "geometry",
                           "stylers": [{
                               "color": "#FFFFFF"
                           }]
                       }, {
                           "featureType": "water",
                           "elementType": "geometry.fill",
                           "stylers": [{
                               "visibility": "on"
                           }, {
                               "color": "#6dccc4"
                           }]
                       }, {
                           "featureType": "water",
                           "elementType": "labels",
                           "stylers": [{
                               "visibility": "on"
                           }]
                       }]
                   

       return {styles};
   });


// styles : styleFactory.mapStyle
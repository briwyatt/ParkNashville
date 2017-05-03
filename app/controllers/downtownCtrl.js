"use strict";
var google;
app.controller("downtownCtrl", function($scope, styleFactory, markerFactory, $timeout, $route) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 36.1605985,
            lng: -86.7798273
        },
        zoom: 16,
        styles: styleFactory.styles
    });
    var populateMarkerArray = function() {
        markerFactory.loadMarkers("downtown")
            .then((markerdata) => {
                let markers = markerdata;
                console.log("this map's markers array", markers);
                console.log("number of markers loaded on this map:", markers.length);
                for (var i = 0; i < markers.length; i++) {
                    /*jshint loopfunc: true */
                    let lat = markers[i].lat;
                    let lng = markers[i].lng;
                    let id = markers[i].id;
                    let title = markers[i].title;


                    var marker13 = new google.maps.Marker({
                        position: {
                            lat,
                            lng
                        },
                        map: map,
                        title: title,
                        id: id,
                        icon: "/parknashville/img/parking.png",
                    });


                    google.maps.event.addListener(marker13, 'rightclick', function(e) {
                        console.log("right click worked");
                        console.log("marker13", marker13);
                        console.log("this", this);
                        myFunction(this);
                    });

                    var infoWindow = new google.maps.InfoWindow();
                    google.maps.event.addListener(marker13, 'click', function(e) {
                        console.log("markerclickeventworks");
                        console.log("marker13", marker13);
                        console.log("grab", grab);

                        let link = `<button id="btns" class="btn btn-default btn-xs btn-success" onclick=" window.open('https://www.google.com/maps/dir//${this.position}/${this.position}&z=17','_blank')"> get directions</button>`
                        infoWindow.setContent("<strong>" + this.title + '</strong><br>' + link);
                        infoWindow.open(map, this);

                    });
                    google.maps.event.addListener(marker13, 'dblclick', function(e) {
                        console.log("thisdblclickworks");
                        infoWindow.close(map, this);
                    });
                }
            });
    }

    populateMarkerArray();

    google.maps.event.addListener(map, 'click', function(event) {
        console.log("grab.value", grab.value);
        // console.log("this", this);
        // console.log("title", title);
        // console.log("this.title", this.title);
        // 

        console.log("grab.value", grab.value);
        event.latLng.lat();
        event.latLng.lat();
        console.log("", event.latLng.lat());


    });

    google.maps.event.addListener(map, 'click', function(event) {
        console.log("this event", event);

        var grab = document.getElementById("grab").value;
        var myLatLng = event.latLng;
        var lat = myLatLng.lat();
        var lng = myLatLng.lng();
        console.log("whats the grab value after assignment made to variable grab:", grab);
        console.log("whats the grab value after assignment made to variable grab.value:", grab.value);
        if (grab === null){
            event.preventDefault();
            event.stopPropagation();
        } else {
        console.log("lat", lat);
        console.log("lng", lng);

        $scope.lat = lat;
        $scope.lng = lng;

        $scope.coordinates = {
            lat: $scope.lat,
            lng: $scope.lng,
            place: "downtown",
            title: grab
        };
            saveMarkerToFB($scope.coordinates);
        }
    });

    // FUNCTION DEFINITIONS 
    function displaymessage() {
        $("#grab").each(function() {
            this.selectedIndex = 0;
        });
        // console.log("the option box value after adding a marker", grab);

    }


    $("#addMarkerbtn").on("click", function() {
        let modal = $('#myModal');
        modal.modal('show');
    });

    function myFunction(markerdata) {
        console.log("markerdata", markerdata);
        if (confirm("Are you sure you want to delete this parking spot?") == true) {
            deleteMarkerFromFB(markerdata);
        } else {
            console.log("you chose not to delete the marker");
        }
    }


    function deleteMarkerFromFB(marker13) {
        markerFactory.deleteMarker(marker13.id)
            .then(
                () => {
                    markerFactory.loadMarkers("downtown")
                    $route.reload();
                }
            );
    }

    function saveMarkerToFB(marker2) {
        markerFactory.saveMarker(marker2)
            .then(
                () => {
                    markerFactory.loadMarkers("downtown")
                        .then(
                            (fireBaseObject) => {
                                console.log("fireBaseObject", fireBaseObject);
                                console.log("fireBaseObject length", fireBaseObject.length);
                                populateMarkerArray();
                            }
                        );
                }
            );

    }

    $('#grab').change(function() {
        // console.log("grab.value", grab.value);

        let modal = $('#myModal');
        // console.log("submit button works");
        // sendGrabName(grab);
        modal.modal('hide');
        // console.log("grab.value after modal is closed", grab.value);
        //grab.value now needs to be allowed into the make a new marker on the map function

    });

});

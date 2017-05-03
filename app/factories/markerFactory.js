
app.factory("markerFactory", function($q, $http, Creds) {

    // POST NEW MARKER OBJECT TO FIREBASE DATABASE
    let saveMarker = function(marker) {
        console.log("inside SaveMarkerFunction this.title", this.title);
        console.log("inside SaveMarkerFunction title", title);
        console.log("inside SaveMarkerFunction this", this);
        console.log("marker", marker);
        return $q((resolve, reject) => {
            $http.post("https://parknash-c096b.firebaseio.com/marker.json", angular.toJson(marker))
                .then((markerObj) => {
                    resolve(markerObj);
                })
                .catch((error) => {
                    reject(error);
                });

        });
    };

    // DELETE A SAVED MARKER FROM FIREBASE DATABASE
    let deleteMarker = (id) => {
        // console.log("delete in factory", marker);
        return $q((resolve, reject) => {
            $http.delete(`${Creds.databaseURL}/marker/${id}.json`)
                .then((ObjectFromFirebase) => {
                    resolve(ObjectFromFirebase);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    // LOAD MARKER OBJECTS SAVED IN FIREBASE ONTO THE MAP, FILTERED BY "PLACE" 
    let loadMarkers = ((place) => {
        let marker = [];
        return $q((resolve, reject) => {
            console.log("list url", `${Creds.databaseURL}/marker.json?orderBy="place"&equalTo="${place}"`); //ordered by place & equal to specified place
            $http.get(`${Creds.databaseURL}/marker.json?orderBy="place"&equalTo="${place}"`)
                .then((itemObject) => {
                    let savedMarkersCollection = itemObject.data;
                    console.log("savedMarkersCollection", savedMarkersCollection);
                    console.log("# of objects in savedMarkersCollection", ObjectLength(savedMarkersCollection));

                    Object.keys(savedMarkersCollection).forEach((key) => {
                        savedMarkersCollection[key].id = key;
                        marker.push(savedMarkersCollection[key]);
                    });
                    resolve(marker);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });

    function ObjectLength(object) {
        var length = 0;
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                ++length;
            }
        }
        return length;
    };
    return { saveMarker, loadMarkers, deleteMarker, ObjectLength };
});
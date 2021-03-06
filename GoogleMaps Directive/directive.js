(function(){

    var mapGeoLocation = ['$window',function($window){
       var template = '<p><span id="status">looking up geolocation ...</span></p>' +
                      '<br /><div id="map"></div>',
           mapContainer = null,
           status = null;

            function link(scope,elem,attrs){
                status = angular.element(document.getElementById('status'));
                mapContainer = angular.element(document.getElementById('map'));

                mapContainer.attr('style', 'height:' + scope.height + 'px;width:'
                                 + scope.width + 'px');
                $window.navigator.geolocation.getCurrentPosition(mapLocation, geoError);
            }

            function mapLocation(pos){
                status.html('Found your Location! Longitude' + pos.coords.longitude +
                            'Latitude:' + pos.coords.latitude);
                var latlang = new google.maps.LatLng(pos.coords.latitude,
                                                     pos.coords.longitude);

                var options = {
                    zoom: 15,
                    center: latlang,
                    mapTypeControl: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(mapContainer[0], options);

                var marker = new google.maps.Marker({
                    position: latlang,
                    map: map,
                    title: "Your Location"
                });
            }

            function geoError(error){
                status.html('failed lookup', + error.message);
            }



            return{
                scope:{
                    height:'@',
                    width:'@'
                },
                link: link,
                template:template
            }

    }];

    angular.module('directivesModule',[])
        .directive('mapGeoLocation', mapGeoLocation);



}());
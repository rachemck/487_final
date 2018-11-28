


  var Raleigh = {lat:35.7794007, lng:-78.6534671};
  var Queens = {lat:40.7444485, lng:-73.9541946};
  var Arling = {lat:38.8775894, lng:-77.1259524};

function initMap() {

    var raleighMap = new google.maps.Map(
        document.getElementById('Ral'), {
          zoom: 13,
          center: Raleigh
        });
        //map of Raleigh

    var map = new google.maps.Map(
        document.getElementById('Que'), {
          zoom: 13,
          center: Queens
        });
        //map for Queens area

    var map = new google.maps.Map(
        document.getElementById('Arl'), {
          zoom: 13,
          center: Arling
        });
        //map for Arlington

      //declare images for markers
      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

      //start of placement for markers
      var beachMarker = new google.maps.Marker({
        position: {lat: -33.890, lng: 151.274},
        map: map,
        icon: image
      });

      var markerlocations = [
            [35.778450, -78.643175, 'Bus', '../img/bus.png']

        ];
        for(i  = 0;  i < markerlocations.length; i++) {
            var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(markerlocations[i][0], markerlocations[i][1]),
                    map: raleighMap,
                    icon:  markerlocations[i][3]
            });
            var address = '<div><p><b>markerlocations[i][2]</b></p></div>';
            var infowindow = new google.maps.InfoWindow({
              content: address
            });
            marker.addListener('click', function() {
              infowindow.open(map, marker);
            });



} //close of initMap
}


//API for public transportation data
$(function(){
  var appId = config.transit_app_id;
  var appCode = config.transit_app_code;
  var myKey = config.MY_KEY;
  var url2 = 'https://developer.nrel.gov/api/cleap/v1/city_vmt_estimates?api_key=' +myKey;
  var incomeData = [];
  var drugs = [];
  console.log(url2);

  $.ajax({
  url: 'https://transit.api.here.com/v3/stations/by_geocoord.json',
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'callbackFunc',
  data: {
    center: '40.745177, -73.949627',
    radius: '350',
    app_id: appId,
    app_code:appCode

  },
  success: function (data) {
    console.log(data);
  },

    error:function(msg){
      console.log('WTF');
    }
  });
});

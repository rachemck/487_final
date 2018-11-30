
  var Raleigh = {lat:35.890998, lng:-78.755598};
  var Queens = {lat:40.7444485, lng:-73.9541946};
  var Arling = {lat:38.8775894, lng:-77.1259524};
  var raleighMap;
  var trafficLayer;
//Traffic on/off function
function toggleTraffic() {
  if (trafficLayer.getMap() == null) {
    //traffic layer is disabled.. enable it
    trafficLayer.setMap(raleighMap);
  } else {
    //traffic layer is enabled.. disable it
    trafficLayer.setMap(null);
  }
}

function initMap() {

  //map of Raleigh
    var raleighMap = new google.maps.Map(
        document.getElementById('Ral'), {
          zoom: 9.5,
          center: Raleigh
        });
        //Raleigh traffic layer
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(raleighMap);
        google.maps.event.addDomListener(document.getElementById('trafficToggle'), 'click', toggleTraffic);


      //map for Queens area
    var nyMap = new google.maps.Map(
        document.getElementById('Que'), {
          zoom: 10,
          center: Queens
        });
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(nyMap);

//map for Arlington
    var arlingMap = new google.maps.Map(
        document.getElementById('Arl'), {
          zoom: 11,
          center: Arling
        });

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(arlingMap);


      //declare images for markers
      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

      //start of placement for markers
      var beachMarker = new google.maps.Marker({
        position: {lat: -33.890, lng: 151.274},
        map: map,
        icon: image
      });

      var markerRaleigh = [
            [35.780779, -78.650215, '1 Mayo Street', '../img/bus.png']

        ];

        //marker locations for Raleigh
        for(i  = 0;  i < markerRaleigh.length; i++) {
            var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(markerRaleigh[i][0], markerRaleigh[i][1]),
                    map: raleighMap,
                    icon:  markerRaleigh[i][3]
            });
            //clickable
            var address = '<div><p><b>hi</b></p></div>';
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
  var transitURL = 'https://transit.api.here.com/v3/coverage/search.json';


  //ajax call for Raleigh transit API
  $.ajax({
  url: transitURL,
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'callbackFunc',
  data: {
    name: 'raleigh',
    app_id: appId,
    app_code: appCode,
    max: '50',
    details : '1',
    politicalview: 'CHN',
    lang: 'en'
  },
  success: function (data) {
    console.log(data);
  },
  });

  //ajax call for Durham transit API
  $.ajax({
  url: transitURL,
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'callbackFunc',
  data: {
    name: 'durham',
    app_id: appId,
    app_code: appCode,
    max: '50',
    details : '1',
    politicalview: 'CHN',
    lang: 'en'
  },
  success: function (data) {
    console.log(data);
  },
  });

  //ajax call for Arlington transit API
  $.ajax({
  url: transitURL,
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'callbackFunc',
  data: {
    name: 'arlington',
    app_id: appId,
    app_code: appCode,
    max: '50',
    details : '1',
    politicalview: 'CHN',
    lang: 'en'
  },
  success: function (data) {
    console.log(data);
  },
  });

  //ajax call for DC transit API
  $.ajax({
  url: transitURL,
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'callbackFunc',
  data: {
    name: 'Washington',
    app_id: appId,
    app_code: appCode,
    max: '50',
    details : '1',
    politicalview: 'CHN',
    lang: 'en'
  },
  success: function (data) {
    console.log(data);
  },
  });

  //ajax call for NYC transit API
  $.ajax({
  url: transitURL,
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'callbackFunc',
  data: {
    name: 'New York',
    app_id: appId,
    app_code: appCode,
    max: '50',
    details : '1',
    politicalview: 'CHN',
    lang: 'en'
  },
  success: function (data) {
    console.log(data);
  },
  });

  //news

  var myKey = config.news_key;
  var url = 'https://newsapi.org/v2/everything?q=amazon+hq2&from=2018-11-14&pageSize=10&sortBy=relevancy&apiKey=' + myKey;
  var urlArray = [url];
  var data = [];
  var html = '';
  var articles = [];
  var i = '';

  for (i=0; i < urlArray.length; i ++){



  $.ajax({
    type:'GET',
    url: urlArray[i],
    dataType:'json',
    async: true,
    data: data,
    success:function(data){
      console.log(data.articles);
      articles = data.articles;
      articles.forEach(function(article){
          console.log(article.title);
          html +='<div class="latest-news flex">';
            html +='<img class="thumbnail" src="' + article.urlToImage + '">';
            html +='<div class="text">';
            html +='<a href="' + article.url + '" target="_blank">';
            html +='<h2 class="headline">' + article.title + '</h2>';
            html +='<h4 class="byline">by ' + article.author + ', <em>' + article.source.name + '</em></h4>';
            html +='</a></div>';
            html +='</div>';
      });
      $('#results').html(html);
    } //success
  }); //ajax request
  }


});

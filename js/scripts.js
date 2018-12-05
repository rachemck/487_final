
//map centers
  var Raleigh = {lat:35.890998, lng:-78.755598};
  var Queens = {lat:40.7444485, lng:-73.9541946};
  var Arling = {lat:38.917275, lng:-77.128333};
//airports pin
  var rdu = {lat:35.879167, lng:-78.787445};
  var laGua = {lat:40.776688, lng:-73.873436};
  var jfk = {lat: 40.651311, lng:-73.797037};
  var ronaldReagan = {lat: 38.851911, lng:-77.041266};
  var dulles = {lat:38.950232, lng:-77.441512};
  var newark = {lat:40.690409, lng:-74.180773};
//colleges pin
  var ncState ={lat:35.785825, lng:-78.681799};
  var duke = {lat: 36.001059, lng:-78.938549};
  var unc = {lat:35.911907, lng:-79.051192};

  var georgeMason = {lat:38.884734, lng:-77.100808};
  var georgeWash ={lat: 38.899662, lng:-77.048692};
  var georgeTown = {lat:38.907549, lng:-77.072264};
  var american = {lat:38.937312, lng:-77.089053};

  var cityColl = {lat:40.819679, lng:-73.949708};
  var columbia = {lat:40.807255, lng:-73.962133};
  var nyu = {lat:40.729228, lng:-73.996766};
//amazon location pin
  var amazonRal = {lat: 35.777959, lng: -78.627680};
  var amazonNyc = {lat:40.747658, lng:-73.956491};
  var amazonArl = {lat:38.858734, lng:-77.051912};


  var trafficLayer;
//Traffic on/off function

//start of Google maps call
function initMap() {

  //map of Raleigh
    var raleighMap = new google.maps.Map(
        document.getElementById('Ral'), {
          zoom: 9.5,
          center: Raleigh
        });
        //Raleigh traffic layer
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(null);

        $('#hide-traffic-ral').click(function(){
          trafficLayer.setMap(null);
        });

        $('#show-traffic-ral').click(function(){
            trafficLayer.setMap(raleighMap);
        });


      //map for Queens area
    var nyMap = new google.maps.Map(
        document.getElementById('Que'), {
          zoom: 11,
          center: Queens
        });
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(null);

        $('#hide-traffic-ny').click(function(){
          trafficLayer.setMap(null);
        });

        $('#show-traffic-ny').click(function(){
            trafficLayer.setMap(nyMap);
        });

//map for Arlington
    var arlingMap = new google.maps.Map(
        document.getElementById('Arl'), {
          zoom: 10.3,
          center: Arling
        });

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(null);

        $('#hide-traffic-arl').click(function(){
          trafficLayer.setMap(null);
        });

        $('#show-traffic-arl').click(function(){
            trafficLayer.setMap(arlingMap);
        });

      //declare images for airport markers

      var ralAirportInfo = new google.maps.InfoWindow({
          content: '<p>Raleigh-Durham International Airport</p>'
        });
  var ralAirportMarker = new google.maps.Marker({
    position: rdu,
    map: raleighMap,
    icon: 'img/airport.png'
  });
  ralAirportMarker.addListener('click', function() {
          ralAirportInfo.open(raleighMap, ralAirportMarker);
        });
//////
var nycAirportInfo = new google.maps.InfoWindow({
    content: '<p>La Guardia Airport</p>'
  });
  var nycAirportMarker1 = new google.maps.Marker({
    position: laGua,
    map: nyMap,
    icon: 'img/airport.png'
  });
  nycAirportMarker1.addListener('click', function() {
          nycAirportInfo.open(nyMap, nycAirportMarker1);
        });
  ////
  var nycAirportInfo2 = new google.maps.InfoWindow({
      content: '<p>JFK International Airport</p>'
    });
  var nycAirportMarker2 = new google.maps.Marker({
    position: jfk,
    map: nyMap,
    icon: 'img/airport.png'
  });
  nycAirportMarker2.addListener('click', function() {
          nycAirportInfo2.open(nyMap, nycAirportMarker2);
        });
  ///
  var nycAirportInfo3 = new google.maps.InfoWindow({
      content: '<p>Newark International Airport</p>'
    });
  var nycAirportMarker3 = new google.maps.Marker({
    position: newark,
    map: nyMap,
    icon: 'img/airport.png'
  });
  nycAirportMarker3.addListener('click', function() {
          nycAirportInfo3.open(nyMap, nycAirportMarker3);
        });
  ///
  var arlAirportInfo = new google.maps.InfoWindow({
      content: '<p>Ronald Reagan Airport</p>'
    });
  var arlAirportMarker = new google.maps.Marker({
    position: ronaldReagan,
    map: arlingMap,
    icon: 'img/airport.png'
  });
  arlAirportMarker.addListener('click', function() {
          arlAirportInfo.open(arlingMap, arlAirportMarker);
        });
///
var arlAirportInfo2 = new google.maps.InfoWindow({
    content: '<p>Dulles International Airport</p>'
  });
  var arlAirportMarker2 = new google.maps.Marker({
    position: dulles,
    map: arlingMap,
    icon: 'img/airport.png'
  });
  arlAirportMarker2.addListener('click', function() {
          arlAirportInfo2.open(arlingMap, arlAirportMarker2);
        });
///

    //declare images for college markers
    var ncStateInfo = new google.maps.InfoWindow({
        content: '<p>North Carolina State University </p>'
      });
    var ncStateMarker = new google.maps.Marker({
      position: ncState,
      map: raleighMap,
      icon: 'img/college.png'
    });
    ncStateMarker.addListener('click', function() {
            ncStateInfo.open(raleighMap, ncStateMarker);
          });
  ///
  var dukeInfo = new google.maps.InfoWindow({
      content: '<p>Duke University </p>'
    });
    var dukeMarker = new google.maps.Marker({
      position: duke,
      map: raleighMap,
      icon: 'img/college.png'
    });
    dukeMarker.addListener('click', function() {
            dukeInfo.open(raleighMap, dukeMarker);
          });
  ///
  var uncInfo = new google.maps.InfoWindow({
      content: '<p>University of North Carolina at Chapel Hill</p>'
    });
    var uncMarker = new google.maps.Marker({
      position: unc,
      map: raleighMap,
      icon: 'img/college.png'
    });
    uncMarker.addListener('click', function() {
            uncInfo.open(raleighMap, uncMarker);
          });
///
var columbiaInfo = new google.maps.InfoWindow({
    content: '<p>Columbia University</p>'
  });
    var columbiaMarker = new google.maps.Marker({
      position: columbia,
      map: nyMap,
      icon: 'img/college.png'
    });
    columbiaMarker.addListener('click', function() {
            columbiaInfo.open(nyMap, columbiaMarker);
          });
///
var nyuInfo = new google.maps.InfoWindow({
    content: '<p>New York University</p>'
  });
    var nyuMarker = new google.maps.Marker({
      position: nyu,
      map: nyMap,
      icon: 'img/college.png'
    });
    nyuMarker.addListener('click', function() {
            nyuInfo.open(nyMap, nyuMarker);
          });
  ///
  var cityCollInfo = new google.maps.InfoWindow({
      content: '<p>City College of New York</p>'
    });
    var cityCollMarker = new google.maps.Marker({
      position: cityColl,
      map: nyMap,
      icon: 'img/college.png'
    });
    cityCollMarker.addListener('click', function() {
            cityCollInfo.open(nyMap, cityCollMarker);
          });
///
var georgeMasonInfo = new google.maps.InfoWindow({
    content: '<p>George Mason University</p>'
  });
    var georgeMasonMarker = new google.maps.Marker({
      position: georgeMason,
      map: arlingMap,
      icon: 'img/college.png'
    });
    georgeMasonMarker.addListener('click', function() {
            georgeMasonInfo.open(arlingMap, georgeMasonMarker);
          });
///
var georgeWashInfo = new google.maps.InfoWindow({
    content: '<p>George Washington University</p>'
  });
    var georgeWashMarker = new google.maps.Marker({
      position: georgeWash,
      map: arlingMap,
      icon: 'img/college.png'
    });
    georgeWashMarker.addListener('click', function() {
            georgeWashInfo.open(arlingMap, georgeWashMarker);
          });
///
var georgeTownInfo = new google.maps.InfoWindow({
    content: '<p>Georgetown University</p>'
  });
    var georgeTownMarker = new google.maps.Marker({
      position: georgeTown,
      map: arlingMap,
      icon: 'img/college.png'
    });
    georgeTownMarker.addListener('click', function() {
            georgeTownInfo.open(arlingMap, georgeTownMarker);
          });
///
var americanInfo = new google.maps.InfoWindow({
    content: '<p>American University</p>'
  });
    var americanMarker = new google.maps.Marker({
      position: american,
      map: arlingMap,
      icon: 'img/college.png'
    });
    americanMarker.addListener('click', function() {
            americanInfo.open(arlingMap, americanMarker);
          });
///
var amazonRalInfo = new google.maps.InfoWindow({
    content: '<p>Hypothetical Amazon HQ2 Site</p>'
  });
    //declare images for amazon markers
  var amazonRalMarker = new google.maps.Marker({
    position: amazonRal,
    map: raleighMap,
    icon: 'img/amazon-marker.png'
  });
  amazonRalMarker.addListener('click', function() {
          amazonRalInfo.open(raleighMap, amazonRalMarker);
        });
///
var amazonNycInfo = new google.maps.InfoWindow({
    content: '<p>Hypothetical Amazon HQ2 Site</p>'
  });
  var amazonNycMarker = new google.maps.Marker({
    position: amazonNyc,
    map: nyMap,
    icon: 'img/amazon-marker.png'
  });
  amazonNycMarker.addListener('click', function() {
          amazonNycInfo.open(nyMap, amazonNycMarker);
        });
///
var amazonArlInfo = new google.maps.InfoWindow({
    content: '<p>Hypothetical Amazon HQ2 Site</p>'
  });
  var amazonArlMarker = new google.maps.Marker({
    position: amazonArl,
    map: arlingMap,
    icon: 'img/amazon-marker.png'
  });
  amazonArlMarker.addListener('click', function() {
          amazonArlInfo.open(nyMap, amazonArlMarker);
        });

} //close of initMap

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

  //THIS IS MY THIRD API- retreives data for the routes/stops info

  var myKey = config.news_key;
  var url = 'https://newsapi.org/v2/everything?q=amazon+hq2&pageSize=10&sortBy=relevancy&apiKey=' + myKey;
  var urlArray = [url];
  var data = [];
  var html = '';
  var articles = [];
  var i = '';

  for (i=0; i < urlArray.length; i ++){


///newsAPI
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

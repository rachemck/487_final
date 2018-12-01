
//map centers
  var Raleigh = {lat:35.890998, lng:-78.755598};
  var Queens = {lat:40.7444485, lng:-73.9541946};
  var Arling = {lat:38.8775894, lng:-77.1259524};
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
          zoom: 13,
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
  var ralAriportMarker = new google.maps.Marker({
    position: rdu,
    map: raleighMap,
    icon: '../img/airport.png'
  });
  var nycAriportMarker1 = new google.maps.Marker({
    position: laGua,
    map: nyMap,
    icon: '../img/airport.png'
  });
  var nycAriportMarker2 = new google.maps.Marker({
    position: jfk,
    map: nyMap,
    icon: '../img/airport.png'
  });
  var nycAriportMarker3 = new google.maps.Marker({
    position: newark,
    map: nyMap,
    icon: '../img/airport.png'
  });
  var arlAirportMarker = new google.maps.Marker({
    position: ronaldReagan,
    map: arlingMap,
    icon: '../img/airport.png'
  });
  var arlAirportMarker2 = new google.maps.Marker({
    position: dulles,
    map: arlingMap,
    icon: '../img/airport.png'
  });

    //declare images for college markers
    var ncStateMarker = new google.maps.Marker({
      position: ncState,
      map: raleighMap,
      icon: '../img/college.png'
    });
    var dukeMarker = new google.maps.Marker({
      position: duke,
      map: raleighMap,
      icon: '../img/college.png'
    });
    var uncMarker = new google.maps.Marker({
      position: unc,
      map: raleighMap,
      icon: '../img/college.png'
    });

    var columbiaMarker = new google.maps.Marker({
      position: columbia,
      map: nyMap,
      icon: '../img/college.png'
    });
    var nyuMarker = new google.maps.Marker({
      position: nyu,
      map: nyMap,
      icon: '../img/college.png'
    });
    var cityCollMarker = new google.maps.Marker({
      position: cityColl,
      map: nyMap,
      icon: '../img/college.png'
    });


    var georgeMasonMarker = new google.maps.Marker({
      position: georgeMason,
      map: arlingMap,
      icon: '../img/college.png'
    });

    var georgeWashMarker = new google.maps.Marker({
      position: georgeWash,
      map: arlingMap,
      icon: '../img/college.png'
    });
    var georgeTownMarker = new google.maps.Marker({
      position: georgeTown,
      map: arlingMap,
      icon: '../img/college.png'
    });

    var americanMarker = new google.maps.Marker({
      position: american,
      map: arlingMap,
      icon: '../img/college.png'
    });

    //declare images for amazon markers
  var amazonRalMarker = new google.maps.Marker({
    position: amazonRal,
    map: raleighMap,
    icon: '../img/amazon-marker.png'
  });
  var amazonNycMarker = new google.maps.Marker({
    position: amazonNyc,
    map: nyMap,
    icon: '../img/amazon-marker.png'
  });
  var amazonArlMarker = new google.maps.Marker({
    position: amazonArl,
    map: arlingMap,
    icon: '../img/amazon-marker.png'
  });

  //declar images for college markers

        //marker locations for Raleigh
      /*  for(i  = 0;  i < markerRaleigh.length; i++) {
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
            }); */



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

//Michael Eaton
//AVF 1307
//week 1 
//AVF Demo app


//Functions for instagram

$('#instaApi').on('pageinit', function(){
$('#game').click(function(){
	$(function(){
	  	  var url = "https://api.instagram.com/v1/tags/game/media/recent?callback=?&amp;client_id=a7a95df91793454f90ae6e0602ff6123&amp;min_id=10"
	  	  var name = "game";
	  	  $.getJSON(url, screenoutput);
	  	 });
	  });
		  
$('#cars').click(function(){
	 $(function(){
	  	  var url = "https://api.instagram.com/v1/tags/cars/media/recent?callback=?&amp;client_id=a7a95df91793454f90ae6e0602ff6123&amp;min_id=10"
	  	  var name = "cars";
	  $.getJSON(url, screenoutput);
	  
	  });
})
$('#food').click(function(){
	 $(function(){
	  	  var url = "https://api.instagram.com/v1/tags/food/media/recent?callback=?&amp;client_id=a7a95df91793454f90ae6e0602ff6123&amp;min_id=10"
	  	  var name = "food";
	  $.getJSON(url, screenoutput);
	  
	  });
}) 
	
	var screenoutput = function(data){
	    console.log(data);
	    
	    $("#picData").html("<h3>Your Seach Resalts</h3>");
	    
	    
	    $.each(data.data, function(index, photo){
	           var picture = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' />" + photo.user.full_name + ", <em>(" + photo.user.username +")</em> , "+ photo.caption.text + "</li>";
	           $("#picData").append(picture)
	           });
	};

})

//Functions for Weather api
//
$(function(){
  var wUrl = "http://api.aerisapi.com/observations/bridgeport,mi?client_id=4J0DvsCTHRMqeVoRsv1mz&client_secret=uwQuCX7jTQ2XaRxgxa3zc88E1AYAZouq3gXlggoH";
  $.getJSON(wUrl, outPutScreen);
  console.log('load weather');
  });


var outPutScreen = function(data){
	console.log(data);
	var ob = data.response.ob;
	var temp = "<li> The temp is: <h4>" + ob.tempF + " F</h4></li>";
	var wind = "<li> The Wind speed is: <h4>" + ob.windMPH + " MPH</h4></li>";
	var weather = "<li> The weather condition is: <h4>" + ob.weather + "</h4></li>"
	$('#weatherList').append(temp);
	$('#weatherList').append(wind);
	$('#weatherList').append(weather);
};

//geolocation

var getCurrentPosition = function() {
    var gSuccess = function(pos) {
        var text = "<div>Latitude: " + pos.coords.latitude +
        "<br/>" + "Longitude: " + pos.coords.longitude + "<br/>" +
        "Accuracy: " + pos.coords.accuracy + "m<br/>" + "</div>";
        $("#currentPosition").html(text);
        console.log(text);
        $('#map').css('visibility','visible');
        $('#map').attr('src', "http://maps.googleapis.com/maps/api/staticmap?center=" +
                       pos.coords.latitude + "," + pos.coords.longitude +
                       "&zoom=13&size=600x300&maptype=roadmap&markers=color:green%7C" +
                       pos.coords.latitude + "," + pos.coords.longitude + "&sensor=false");
    };
    var gError = function(error) {
        $("#currentPosition").html("Error getting geolocation: " + error.code);
        console.log("Error getting geolocation: code=" + error.code + " message=" + error.message);
    };
    
    $('#map').css('visibility','hidden');
    $("#currentPosition").html("Getting geolocation . . .");
    console.log("Getting geolocation . . .");
    navigator.geolocation.getCurrentPosition(gSuccess, gError);
};

// geolocation Watch Position
var watchID = null;
function clearWatch() {
    if (watchID !== null) {
        navigator.geolocation.clearWatch(watchID);
        watchID = null;
        $("#currentPosition").empty();
        $('#map').css('visibility','hidden');
    }
}
var wSuccess = function(pos) {
    $("#currentPosition").html("Watching geolocation . . .");
    $('#map').css('visibility','hidden');
    var text = "<div>Latitude: " + pos.coords.latitude +
    " (watching)<br/>" + "Longitude: " + pos.coords.longitude + "<br/>" +
    "Accuracy: " + pos.coords.accuracy + "m<br/>" + "</div>";
    $("#currentPosition").html(text);
    console.log(text);
    $('#map').css('visibility','visible');
    $('#map').attr('src', "http://maps.googleapis.com/maps/api/staticmap?center=" +
                   pos.coords.latitude + "," + pos.coords.longitude +
                   "&zoom=13&size=600x300&maptype=roadmap&markers=color:green%7C" +
                   pos.coords.latitude + "," + pos.coords.longitude + "&sensor=false");
};
var wError = function(error) {
    $("#currentPosition").html("Error getting geolocation: " + error.code);
    console.log("Error getting geolocation: code=" + error.code + " message=" + error.message);
};
var toggleWatch = function() {
    if (watchID) {
        console.log("Stopped watching position");
        clearWatch();  // sets watchID = null;
    } else {
        //$("#cur_position").empty();
        $('#map').css('visibility','hidden');
        $("#currentPosition").html("Watching geolocation . . .");
        console.log("Watching geolocation . . .");
        var options = { frequency: 3000, maximumAge: 5000, timeout: 5000, enableHighAccuracy: true };
        watchID = navigator.geolocation.watchPosition(wSuccess, wError, options);
    }
};


//Accelerometer
function roundNumber(num) {  // make numbers round
    var dec = 3;
    var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
}

var accelerationWatch = null;
function updateAcceleration(acceleration) {
    document.getElementById('x').innerHTML = roundNumber(acceleration.x);
    document.getElementById('y').innerHTML = roundNumber(acceleration.y);
    document.getElementById('z').innerHTML = roundNumber(acceleration.z);
}
function toggleAccel() {
    if (accelerationWatch !== null) {
        navigator.accelerometer.clearWatch(accelerationWatch);
        updateAcceleration({
            x : "",
            y : "",
            z : ""
        });
        accelerationWatch = null;
    } else {
        var options = {};
        options.frequency = 1000;
        accelerationWatch = navigator.accelerometer.watchAcceleration(
                updateAcceleration, function(ex) {
                    alert("Accelerometer Error!");
                }, options);
    }
}

function getAccel() {
    if (accelerationWatch !== null) {
        navigator.accelerometer.clearWatch(accelerationWatch);
        updateAcceleration({
            x : "",
            y : "",
            z : ""
        });
        accelerationWatch = null;
    }
    navigator.accelerometer.getCurrentAcceleration(
            updateAcceleration, function(ex) {
                alert("Accelerometer Error!");
            });
}

//Device Info

var onDeviceReady = function() {
    console.log("deviceready event fired");
    
    document.getElementById("name").innerHTML = device.name;
    document.getElementById("pgversion").innerHTML = device.cordova ? device.cordova : device.phonegap;
    document.getElementById("platform").innerHTML = device.platform;
    document.getElementById("uuid").innerHTML = device.uuid;
    document.getElementById("version").innerHTML = device.version;
    document.getElementById("width").innerHTML = screen.width;
    document.getElementById("height").innerHTML = screen.height;
    document.getElementById("availwidth").innerHTML = screen.availWidth;
    document.getElementById("availheight").innerHTML = screen.availHeight;
    document.getElementById("colorDepth").innerHTML = screen.colorDepth;
};

//Network Connections

function checkNetwork() {
    var networkState = navigator.network.connection.type;
    
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
    
    $('#connection').html(states[networkState]);
}


//page listener
function init() {
    document.addEventListener("deviceready", onDeviceReady, true);
}

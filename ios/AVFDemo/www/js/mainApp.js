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

